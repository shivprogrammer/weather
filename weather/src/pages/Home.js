import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_BASE_URL } from "../api/api";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { pageAnimation } from "../utils/animations";
import WeatherInfo from "../components/WeatherInfo";
import ClipLoader from "react-spinners/ClipLoader";
import Player from "../components/Player";
import { songData } from "../utils/songData";
import Input from "@material-ui/core/Input"
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { StyledSearch } from "../styledComponents/StyledSearch";

const Home = () => {
  const songs = shuffle(songData());
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [condition, setCondition] = useState(null);
  const [songOptions, setSongOptions] = useState([]);
  const [zipCode, setZipCode] = useState("10036");

  function shuffle(arr) {
    let currIndex = arr.length;
    let randIndex;
    while (currIndex !== 0) {
      randIndex = Math.floor(Math.random() * currIndex);
      currIndex--;
      [arr[currIndex], arr[randIndex]] = [
        arr[randIndex], arr[currIndex]];
    }
    return arr;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatitude(res.coords.latitude);
      setLongitude(res.coords.longitude);
    }, err => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      async function getLatLongData() {
        const LOCAL_LAT_LONG_WEATHER_ENDPOINT = `${WEATHER_API_BASE_URL}lat=${latitude}&lon=${longitude}&appid=06d2f8b149857e20bd8f265ca5d2e879`
        await axios.get(LOCAL_LAT_LONG_WEATHER_ENDPOINT)
          .then(res => {
            setWeatherData(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      }
      getLatLongData()
    } else {
      getNewYorkWeather();
    }
  }, [latitude, longitude])

  useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main) {
      setCondition(weatherData.weather[0].main);
    }
  }, [weatherData])

  useEffect(() => {
    if (condition) {
      setSongOptions(songs.filter(song => {
        return song.weather.includes(condition);
      }))
      if (weatherData && weatherData.name && weatherData.main && weatherData.weather) {
        setIsLoading(false);
      }
    }
  }, [weatherData, condition])

  useEffect(() => {
    if (!isLoading && songOptions.length === 0) {
      setSongOptions(songs);
    }
  }, [isLoading, songOptions])

  const submitSearchZipCode = async (event) => {
    event.preventDefault();
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      alert("Please input a valid zip code");
    } else {
      getNewYorkWeather()
    }
  }

  async function getNewYorkWeather() {
    const ZIP_CODE_URL = `${WEATHER_API_BASE_URL}zip=${zipCode},us&appid=06d2f8b149857e20bd8f265ca5d2e879`;
    await axios.get(ZIP_CODE_URL)
      .then(res => {
        setWeatherData(res.data);
        setCondition(res.data.weather[0].main);
        setSongOptions(songs.filter(song => {
          return song.weather.includes(condition);
        }))
      })
      .catch(err => {
        console.log(err);
        alert("Please input a valid zip code");
      });
  }

  const updateSearchInput = (event) => {
    event.preventDefault();
    setZipCode(event.target.value);
  }

  return (
    <>
      {isLoading
        ? <ClipLoader color={"aqua"} loading={isLoading} css={loaderStyle} />
        : (
          <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <StyledSearch>
              <form style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingRight: "1.5rem", paddingTop: "3rem", paddingBottom: "2rem"}}>
                <IconButton onClick={submitSearchZipCode} type="submit">
                  <SearchIcon />
                </IconButton>
                <Input
                  onChange={updateSearchInput}
                  type="search"
                  placeholder="   Zip Code Search"
                  color="primary"
                  className="textfield"
                />
              </form>
            </StyledSearch>
            <WeatherInfo
              location={weatherData.name}
              tempData={weatherData.main.temp}
              condition={condition}
              iconData={weatherData.weather[0].icon}
            />
            {songOptions.length > 0 && <Player songOptions={songOptions} condition={condition} />}
          </motion.div>
        )}
    </>
  )
}

const loaderStyle = css`
  display: block;
  margin: 0 auto;
`;

export default Home;