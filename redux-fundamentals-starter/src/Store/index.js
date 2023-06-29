import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import userAuthReducer from "./UserAuthSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    userAuth: userAuthReducer,
  },
});

export default Store;
