import React from "react";
import { WEATHER_CONDITION_ICON } from "../api/api";
import { StyledWeather } from "../styledComponents/StyledWeather";

const WeatherInfo = ({location, tempData, condition, iconData}) => {
  const icon = `${WEATHER_CONDITION_ICON}${iconData}@2x.png`;
  const temp = Math.round(((tempData - 273.15) * 9) / 5 + 32)

  return (
    <StyledWeather>
      <h2>{temp}°F {condition}</h2>
      <h1>{location}</h1>
      <img src={icon} alt="Home Icon" />
    </StyledWeather>
  )
}


export default WeatherInfo;