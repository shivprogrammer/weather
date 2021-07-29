import React, { useRef, useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PauseIcon from '@material-ui/icons/Pause';
import { PlayerContainer, PlayControl, TimeControl } from "../styledComponents/StyledPlayer";

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, songOptions }) => {
  const audioRef = useRef(null);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    songLength: 0,
    animationPercentage: 0
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
    const time = event.target.currentTime;
    const length = event.target.duration;
    const percentage = Math.round((Math.round(time) / Math.round(length)) * 100);
    setSongTime({...songTime, currentTime: time, songLength: length, animationPercentage: percentage});
  }

  const formatTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value
    setSongTime({...songTime, currentTime: event.target.value})
  }

  const trackAnimation = {
    transform: `translateX(${songTime.animationPercentage}%)`
  }

  return (
    <PlayerContainer>
      <TimeControl>
        <p>{formatTime(songTime.currentTime)}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]}`}} className="track">
          <input
            min={0}
            max={songTime.songLength}
            value={songTime.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
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
        src={currentSong.audio}
        onLoadedMetadata={timeHandler}>
      </audio>
    </PlayerContainer>
  )
}

export default Player;