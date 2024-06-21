import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
  value: 1,
};
const counterSlice = createSlice({
  name: "abc",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice;

// increment() => return {type: "abc/increment"}
// decrement() => return {type: "abc/decrement"}
// increment("gangadhar") => return {type: "abc/increment", payload: "gangadhar"}
