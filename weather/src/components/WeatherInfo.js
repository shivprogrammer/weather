import React from "react";
import { WEATHER_CONDITION_ICON } from "../api/api";
import { StyledWeather } from "../styledComponents/StyledWeather";
import { motion } from "framer-motion";
import { weatherInfoAnimation } from "../utils/animations";

const WeatherInfo = ({location, tempData, condition, iconData}) => {
  const icon = `${WEATHER_CONDITION_ICON}${iconData}@2x.png`;
  const temp = Math.round(((tempData - 273.15) * 9) / 5 + 32)

  return (
    <>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <motion.h1 style={{fontFamily: "Copperplate, fantasy"}} variants={weatherInfoAnimation}>{location}</motion.h1>
      </div>
      <StyledWeather>
        <motion.h2 variants={weatherInfoAnimation}>{temp}°F {condition}</motion.h2>
        <motion.img variants={weatherInfoAnimation} src={icon} alt="Weather Icon" />
      </StyledWeather>
    </>
  )
}


export default WeatherInfo;