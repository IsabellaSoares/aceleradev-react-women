const initialState = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
};

export const userReducer = (state = initialState, action) => {
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
