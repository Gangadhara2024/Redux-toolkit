import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";

const store2 = configureStore({
  reducer: {
    // pass all reducers
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store2;

// In Redux-Toolkit Reducers are not straight functions as in react-redux, they are created using createSlice();
