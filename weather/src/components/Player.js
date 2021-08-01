import React, { useRef, useState, useEffect } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PauseIcon from '@material-ui/icons/Pause';
import { PlayerContainer, PlayControl, TimeControl } from "../styledComponents/StyledPlayer";
import Song from "./Song";
import { weatherConditions } from "../utils/weatherConditions"

const Player = ({ songOptions, condition }) => {
  const audioRef = useRef(null);
  const [rain, setRain] = useState(null);
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

  const backgroundDrizzle = () => {
    let numDrops = 0;
    let rainDrops = "";
    while (numDrops < 700) {
      const randFifteen = Math.floor(Math.random() * 14 + 1);
      const rand = Math.random();
      numDrops += randFifteen;
      rainDrops += '<div><img src="https://shivrandombucket.s3.amazonaws.com/raindrop.png" style="margin-left: '+ numDrops +'%; width: '+ randFifteen +'px; animation: rain 2s ease-in infinite '+ rand +'s;" alt="Raindrop" /></div>';
    }
    setRain(rainDrops);
  }

  const backgroundRain = () => {
    let numDrops = 0;
    let rainDrops = "";
    while (numDrops < 700) {
      const randFifteen = Math.floor(Math.random() * 14 + 1);
      const randThree = Math.floor(Math.random() * 2 + 1);
      const rand = Math.random();
      numDrops += randThree;
      rainDrops += '<div><img src="https://shivrandombucket.s3.amazonaws.com/raindrop.png" style="margin-left: '+ numDrops +'%; width: '+ randFifteen +'px; animation: rain 1.5s ease-in infinite '+ rand +'s;" alt="Raindrop" /></div>';
    }
    setRain(rainDrops);
  }

  const backgroundHeavyRain = () => {
    let numDrops = 0;
    let rainDrops = "";
    while (numDrops < 1000) {
      const randFifteen = Math.floor(Math.random() * 14 + 1);
      const rand = Math.random();
      numDrops++;
      rainDrops += '<div><img src="https://shivrandombucket.s3.amazonaws.com/raindrop.png" style="margin-left: '+ numDrops +'%; width: '+ randFifteen +'px; animation: heavy-rain 0.5s ease-in infinite '+ rand +'s;" alt="Raindrop" /></div>';
    }
    setRain(rainDrops);
  }

  useEffect(() => {
    if (condition === weatherConditions.RAIN) {
      backgroundRain();
    } else if (condition === weatherConditions.THUNDERSTORM) {
      backgroundHeavyRain();
    } else if (condition === weatherConditions.DRIZZLE) {
      backgroundDrizzle();
    }
  }, [condition])

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
            <div style={trackAnimation} className="animate-track"/>
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
      {(condition === weatherConditions.RAIN || condition === weatherConditions.DRIZZLE || condition === weatherConditions.THUNDERSTORM) && <div dangerouslySetInnerHTML={{__html: rain}} />}
      {condition === weatherConditions.THUNDERSTORM && <div className="storm" />}
    </>
  )
}

export default Player;