import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./MainSlice";
import CartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    main: MainReducer,
    cart: CartReducer,
  },
});

export default Store;
