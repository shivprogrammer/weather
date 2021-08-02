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
      name: "burn my mind",
      artist: "Tesk",
      art: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8137",
      color: ["#87D6F4", "#6A58B2"],
      weather: [weatherConditions.CLOUDS, weatherConditions.DRIZZLE]
    },
    {
      id: uuidv4(),
      name: "Trenches",
      artist: "Philanthrope, Sleepy Fish",
      art: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10247",
      color: ["#6A58B2", "#87D6F4"],
      weather: [weatherConditions.CLEAR]
    },
    {
      id: uuidv4(),
      name: "Calm",
      artist: "ØDYSSEE, Florent Garcia",
      art: "https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9285",
      color: ["#6077EE", "#323F9E"],
      weather: [weatherConditions.RAIN, weatherConditions.THUNDERSTORM]
    },
    {
      id: uuidv4(),
      name: "Lax Incense",
      artist: "Mama Aiuto, Daphné",
      art: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      color: ["#772927", "#AF5224"],
      weather: [weatherConditions.CLEAR]
    },
    {
      id: uuidv4(),
      name: "Flip Flop Vibe",
      artist: "The BREED",
      art: "https://i.scdn.co/image/ab67616d0000b273be3d11ca6409985db8ba88ca",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16187",
      color: ["#FE9C5C", "#FEB38A"],
      weather: [weatherConditions.CLEAR]
    },
    {
      id: uuidv4(),
      name: "Sodium",
      artist: "Philanthrope, Tesk",
      art: "https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
      color: ["#EBEBEB", "#2D2D2D"],
      weather: [weatherConditions.CLOUDS, weatherConditions.DRIZZLE, weatherConditions.RAIN]
    },
    {
      id: uuidv4(),
      name: "Double Cheese With Fries",
      artist: "Flitz&Suppe, Omaure",
      art: "https://i.scdn.co/image/ab67616d0000b273ae936137924268701ee507b4",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1689",
      color: ["#AED1D1", "#6E8281"],
      weather: [weatherConditions.CLOUDS, weatherConditions.DRIZZLE, weatherConditions.CLEAR]
    },
  ];
}




