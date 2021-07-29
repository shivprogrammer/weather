import { v4 as uuidv4 } from "uuid";
import { weatherConditions } from "./weatherConditions";

export function songData() {
  return [
    {
      id: uuidv4(),
      name: "Soul Samba",
      artist: "Screen Jazzmaster, Zmeyev",
      art: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16063",
      color: ["#F2AD34", "#202019", "#202019"],
      weather: [weatherConditions.CLEAR]
    },
    {
      id: uuidv4(),
      name: "Cruisin",
      artist: "Loop Schrauber, TRIBEZ",
      art: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10321",
      color: ["#D5A5BB", "#F9F9F9"],
      weather: [weatherConditions.CLEAR]
    },
    {
      id: uuidv4(),
      name: "Splendour",
      artist: "Aarigod",
      art: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13013",
      color: ["#2E2B1D", "#536426"],
      weather: [weatherConditions.THUNDERSTORM, weatherConditions.DRIZZLE, weatherConditions.RAIN, weatherConditions.CLOUDS, weatherConditions.ATMOSPHERE, weatherConditions.SNOW]
    },
  ];
}