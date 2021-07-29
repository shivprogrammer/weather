import React from "react";
import { StyledSong } from "../styledComponents/StyledSong";

const Song = ({song, isPlaying }) => {
  return (
    <StyledSong isPlaying={isPlaying}>
      <img alt={song.name} src={song.art} />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </StyledSong>
  )
}

export default Song;