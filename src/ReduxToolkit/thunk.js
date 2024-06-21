import { add } from "./cartSlice";

// export function asyncaddProduct(productName) {
//   return async function (dispatch, getState) {
//     await new Promise((r) => setTimeout(r, 3000));
//     dispatch(add(productName));
//   };
// }

export const asyncaddProduct = (productName) => {
  return async (dispatch, getState) => {
    await new Promise((r) => setTimeout(r, 3000));
    dispatch(add(productName));
  };
};
