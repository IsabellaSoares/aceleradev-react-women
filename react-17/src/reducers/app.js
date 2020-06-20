const initialState = {
  environment: 'production',
  name: 'react-spotify',
  version: '0.1.0',
};

export const appReducer = (state = initialState, action) => {
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
