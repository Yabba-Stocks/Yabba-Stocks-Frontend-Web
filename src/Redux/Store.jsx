// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";

const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = JSON.stringify(store.getState());
  localStorage.setItem("reduxState", state);
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(saveStateMiddleware);
  },
});

// const savedToken = localStorage.getItem("token");
// const savedUser = JSON.parse(localStorage.getItem("user"));
// if (savedToken && savedUser) {
//   store.dispatch(setUser({ token: savedToken, user: savedUser }));
// }
