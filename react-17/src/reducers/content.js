const initialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'CLICK_UPDATE_VALUE':
    //   return {
    //     ...state,
    //     newValue: action.newValue,
    //   };
    default:
      return state;
  }
};
