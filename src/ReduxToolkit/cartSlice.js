import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "ab",
  initialState: { products: [] },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload);
    },
  },
});
export const { add } = cartSlice.actions;
export default cartSlice;
