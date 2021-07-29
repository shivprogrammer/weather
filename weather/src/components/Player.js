import React, { useRef, useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PauseIcon from '@material-ui/icons/Pause';
import { PlayerContainer, PlayControl, TimeControl } from "../styledComponents/StyledPlayer";

const Player = ({ song, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [songTime, setSongTime] = useState({
    currentTime: null,
    songLength: null
  });

  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  }

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  const timeHandler = (event) => {
    setSongTime({...songTime, currentTime: event.target.currentTime, songLength: event.target.duration});
  }

  const formatTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  return (
    <PlayerContainer>
      <TimeControl>
        <p>{formatTime(songTime.currentTime)}</p>
        <input type="range" />
        <p>{formatTime(songTime.songLength)}</p>
      </TimeControl>
      <PlayControl>
        <ChevronLeftIcon />
        {isPlaying ? <PauseIcon onClick={pauseSong} /> : <PlayArrowIcon onClick={playSong} /> }
        <ChevronRightIcon />
      </PlayControl>
      <audio
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={song.audio}
        onLoadedMetadata={timeHandler}>
      </audio>
    </PlayerContainer>
  )
}

export default Player;