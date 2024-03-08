// reducer.js
const initialState = {
      user: null,
      isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case "LOGIN":
            case "SIGN_UP":
                  return {
                        ...state,
                        user: action.payload,
                        isAuthenticated: true,
                  };

            case "LOG_OUT":
                  return {
                        ...state,
                        user: null,
                        isAuthenticated: false,
                  };

            default:
                  return state;
      }
};

export default authReducer;
