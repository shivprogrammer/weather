import axios from "axios";
import { FULL_SONGS_URL } from "../api/api";
import { v4 as uuidv4 } from "uuid";
import shuffle from "../utils/utils";

export const loadSongs = () => async(dispatch) => {
  const songsData = await axios.get(FULL_SONGS_URL);
  if (!songsData.status) {
    throw new Error(`HTTP error! status: ${songsData.status}`);
  }
  const songsDataWithId = shuffle(songsData.data.map(song => ({...song, id: uuidv4()})));
  dispatch({
    type: "FETCH_SONGS",
    payload: songsDataWithId
  })
}