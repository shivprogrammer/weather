const initialState = {
  allSongs: []
}

const songsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_SONGS":
      return {...state}
    default:
      return {...state}
  }
}

export default songsReducer;