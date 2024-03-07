// actions.js
export const login = (user) => ({
      type: "LOGIN",
      payload: user,
});

export const signUp = (user) => ({
      type: "SIGN_UP",
      payload: user,
});

export const logOut = () => ({
      type: "LOG_OUT",
});
