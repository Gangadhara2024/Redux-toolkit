import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { asyncIncCount, fetchpostOffice } from "./thunk";
import { useEffect, useState } from "react";

const Citysearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const postOffices = useSelector((state) => state.city.info);
  // console.log(postOffices);

  useEffect(() => {
    dispatch(fetchpostOffice);
  }, []);
  return (
    <div>
      <input
        placeholder="search post offices"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <ul>
        {postOffices
          .filter(
            (postOffice) =>
              postOffice.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
          )
          .map((postOffice) => (
            <li>{postOffice.Name}</li>
          ))}
      </ul> */}
    </div>
  );
};
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
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
      <>
        <Counter />
        <Citysearch />
      </>
    </Provider>
  );
};
