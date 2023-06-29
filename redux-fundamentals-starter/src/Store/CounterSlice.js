import { createSlice } from "@reduxjs/toolkit";

const InitialCounterState = {
  counter: 0,
  isCounterInvisible: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: InitialCounterState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
      state.isCounterInvisible = false;
    },
    decrement(state, action) {
      state.counter -= action.payload;
      state.isCounterInvisible = false;
    },
    setCounterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
