import React from "react";
import { StyledSong } from "../styledComponents/StyledSong";

const Song = ({song}) => {
  return (
    <StyledSong>
      <img src={song.art} />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </StyledSong>
  )
}

export default Song;