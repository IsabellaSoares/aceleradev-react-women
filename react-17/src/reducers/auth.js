const initialState = {
  acessToken: '',
  errorMessage: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: '',
  tokenType: '',
};

export const authReducer = (state = initialState, action) => {
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
