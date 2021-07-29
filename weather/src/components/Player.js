import React, { useRef, useState, useEffect } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PauseIcon from '@material-ui/icons/Pause';
import { PlayerContainer, PlayControl, TimeControl } from "../styledComponents/StyledPlayer";
import Song from "./Song";

const Player = ({ songOptions }) => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(songOptions[0]);
  const [isPlaying, setIsPlaying] = useState(false);
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
    event.preventDefault();
    const time = event.target.currentTime;
    const length = event.target.duration;
    const percentage = Math.round((Math.round(time) / Math.round(length)) * 100);
    setSongTime({...songTime, currentTime: time, songLength: length, animationPercentage: percentage});
    if (percentage === 100) {
      const newIndex = (songOptions.findIndex(song => song.id === currentSong.id) + 1) % songOptions.length;
      setCurrentSong(songOptions[newIndex]);
      setIsPlaying(false);
    }
  }

  const formatTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  const dragHandler = (event) => {
    event.preventDefault();
    audioRef.current.currentTime = event.target.value
    setSongTime({...songTime, currentTime: event.target.value})
  }

  const trackAnimation = {
    transform: `translateX(${songTime.animationPercentage}%)`
  }

  const nextSong = () => {
    const newIndex = (songOptions.findIndex(song => song.id === currentSong.id) + 1) % songOptions.length;
    setCurrentSong(songOptions[newIndex]);
    setIsPlaying(false);
  }

  const previousSong = () => {
    let newIndex = songOptions.findIndex(song => song.id === currentSong.id) - 1;
    if (newIndex < 0) {
      newIndex = songOptions.length - 1;
    }
    setCurrentSong(songOptions[newIndex]);
    setIsPlaying(false);
  }

  useEffect(() => {
    setCurrentSong(songOptions[0]);
    setIsPlaying(false);
  }, [songOptions])

  return (
    <>
      <Song song={currentSong} isPlaying={isPlaying} />
      <PlayerContainer>
        <TimeControl>
          <p>{formatTime(songTime.currentTime)}</p>
          <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]}`}} className="track">
            <input
              min={0}
              max={songTime.songLength || 0}
              value={songTime.currentTime}
              onChange={dragHandler}
              type="range"
            />
            <div style={trackAnimation} className="animate-track"></div>
          </div>
          <p>{formatTime(songTime.songLength)}</p>
        </TimeControl>
        <PlayControl>
          <ChevronLeftIcon onClick={previousSong} />
          {isPlaying ? <PauseIcon fontSize="large" onClick={pauseSong} /> : <PlayArrowIcon fontSize="large" onClick={playSong} />}
          <ChevronRightIcon onClick={nextSong} />
        </PlayControl>
        <audio
          onTimeUpdate={timeHandler}
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeHandler}>
        </audio>
      </PlayerContainer>
    </>
  )
}

export default Player;