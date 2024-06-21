import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store2 from "./store2";
import { increment } from "./counterSlice";
import { add } from "./cartSlice";
import { asyncaddProduct } from "./thunk";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inc = () => {
    // dispatch({ type: "abc/increment" });
    dispatch(increment(5));
  };
  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={inc}>increment</button>
      <button>decrement</button>
    </div>
  );
};
const Cart = () => {
  const [item, setItem] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const addproduct = () => {
    dispatch(asyncaddProduct(item));
  };
  return (
    <div>
      <input
        placeholder="select products"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addproduct}>add product</button>
      <ul>
        {products.map((p) => {
          return <li key={p}>{p}</li>;
        })}
      </ul>
    </div>
  );
};
export const Toolkitexample = () => {
  return (
    <Provider store={store2}>
      <Counter />
      <Cart />
    </Provider>
  );
};
