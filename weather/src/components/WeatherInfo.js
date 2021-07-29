import React from "react";
import { WEATHER_CONDITION_ICON } from "../api/api";

const WeatherInfo = ({location, tempData, condition, iconData}) => {
  const icon = `${WEATHER_CONDITION_ICON}${iconData}@2x.png`;
  const temp = Math.round(((tempData - 273.15) * 9) / 5 + 32)

  return (
    <>
      <h1>{location}</h1>
      <h2>{temp}</h2>
      <h3>{condition}</h3>
      <img src={icon} alt="Weather Icon" />
    </>
  )
}


export default WeatherInfo;