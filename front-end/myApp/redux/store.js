// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./reducers";

// const store = createStore(authReducer);
const store = configureStore({
      reducer: authReducer,
});

export default store;
