import React from "react";
import { StyledSong } from "../styledComponents/StyledSong";
import Wave from "./Wave";

const Song = ({song, isPlaying }) => {
  return (
    <>
      <Wave waveColor={song.color[0]}/>
      <StyledSong isPlaying={isPlaying}>
        <img alt={song.name} src={song.art} />
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </StyledSong>
    </>
  )
}

export default Song;