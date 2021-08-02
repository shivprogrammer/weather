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
      color: ["#F2AD34", "#202019"],
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
      name: "Roses n Flames",
      artist: "C Y G N",
      art: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
      color: ["#C781D4", "#1F4372"],
      weather: [weatherConditions.DRIZZLE, weatherConditions.RAIN, weatherConditions.CLOUDS, weatherConditions.ATMOSPHERE, weatherConditions.SNOW, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "On The Moon",
      artist: "SwuM",
      art: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15237",
      color: ["#AB6E2D", "#2F3938"],
      weather: [weatherConditions.THUNDERSTORM, weatherConditions.DRIZZLE, weatherConditions.RAIN, weatherConditions.CLOUDS, weatherConditions.ATMOSPHERE, weatherConditions.SNOW, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "Splendour",
      artist: "Aarigod",
      art: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13013",
      color: ["#536426", "#2E2B1D"],
      weather: [weatherConditions.THUNDERSTORM, weatherConditions.DRIZZLE, weatherConditions.RAIN, weatherConditions.CLOUDS, weatherConditions.ATMOSPHERE, weatherConditions.SNOW, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "Viatecture",
      artist: "Leavv, Makzo",
      art: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20119",
      color: ["#BCBA35", "#C19CB2"],
      weather: [weatherConditions.DRIZZLE, weatherConditions.RAIN]
    },
    {
      id: uuidv4(),
      name: "Caravan",
      artist: "goosetaf, The Field Tapes, Makzo",
      art: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20122",
      color: ["#BCBA35", "#C19CB2"],
      weather: [weatherConditions.DRIZZLE, weatherConditions.CLOUDS, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "Be Here Now",
      artist: "Chillhop Music, chief.",
      art: "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21782",
      color: ["#000000", "#28404E"],
      weather: [weatherConditions.DRIZZLE, weatherConditions.CLEAR, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "Dawn",
      artist: "Toonorth",
      art: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17941",
      color: ["#9091F7", "#FFA322"],
      weather: [weatherConditions.DRIZZLE, weatherConditions.CLEAR, weatherConditions.MIST]
    },
    {
      id: uuidv4(),
      name: "Lax Incense",
      artist: "Mama Aiuto, Daphné",
      art: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      audio: "https://chillhop.com/wp-includes/js/wp-embed.min.js?ver=5.7.2",
      color: ["#772927", "#AF5224"],
      weather: [weatherConditions.CLEAR]
    },
  ];
}





