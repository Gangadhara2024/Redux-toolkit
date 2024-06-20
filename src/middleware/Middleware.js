import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { asyncIncCount } from "./thunk";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(asyncIncCount);
  };
  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={inc}>increment</button>
    </div>
  );
};
export const Middleware = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
