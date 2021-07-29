import React, { useEffect, useState } from "react";
import Player from "./Player";
import Song from "./Song";
import { songData } from "../utils/songData";

const MusicContainer = ({condition}) => {
  const songs = songData();
  const [songOptions, setSongOptions] = useState([]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setSongOptions(songs.filter(song => {
      return song.weather.includes(condition);
    }))
  }, [condition])

  useEffect(() => {
    if (songOptions.length > 0) {
      setCurrentSong(songOptions[0]);
    }
  }, [condition, songOptions])

  return (
    <>
      <Song song={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songOptions={songOptions}
      />
    </>
  )
}

export default MusicContainer;