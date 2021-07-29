import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { PlayerContainer, PlayControl, TimeControl } from "../styledComponents/StyledPlayer";

const Player = () => {
  return (
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <ChevronLeftIcon />
        <PlayArrowIcon />
        <ChevronRightIcon />
      </PlayControl>
    </PlayerContainer>
  )
}

export default Player;