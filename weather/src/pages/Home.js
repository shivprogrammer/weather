import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_BASE_URL } from "../api/api";

const Home = () => {
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
        const LOCAL_LAT_LONG_WEATHER_ENDPOINT = `${WEATHER_API_BASE_URL}lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`
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

  return <h1>Home Page</h1>
}

export default Home;