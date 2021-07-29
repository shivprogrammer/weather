import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_BASE_URL } from "../api/api";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { pageAnimation } from "../utils/animations";
import WeatherInfo from "../components/WeatherInfo";
import ClipLoader from "react-spinners/ClipLoader";
import MusicContainer from "../components/MusicContainer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [localWeatherData, setLocalWeatherData] = useState({});

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
            setLocalWeatherData(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      }
      getLatLongData()
    }
  }, [latitude, longitude])

  useEffect(() => {
    if (localWeatherData && localWeatherData.name && localWeatherData.main && localWeatherData.weather) {
      setIsLoading(false);
    }
  }, [localWeatherData])

  return (
    <>
      {isLoading
        ? <ClipLoader color={"aqua"} loading={isLoading} css={loaderStyle} />
        : (
          <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <WeatherInfo
              location={localWeatherData.name}
              tempData={localWeatherData.main.temp}
              condition={localWeatherData.weather[0].main}
              iconData={localWeatherData.weather[0].icon}
            />
            <MusicContainer condition={localWeatherData.weather[0].main} />
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