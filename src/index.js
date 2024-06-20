import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Middleware } from "./middleware/Middleware";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Middleware />
  // </React.StrictMode>
);

// import { Provider, useDispatch, useSelector } from "react-redux";
// import store1 from "./store.js";
// import { asyncIncrementCount, getPostoffice } from "./thunk.js";
// import { useEffect, useState } from "react";

// const Counter = () => {
//   console.log("counter reducer");
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   const inc = () => {
//     dispatch(asyncIncrementCount);
//   };
//   return (
//     <div>
//       <h1>count: {count} </h1>
//       <button onClick={inc}>increment</button>
//     </div>
//   );
// };

// const Citysearch = () => {
//   console.log("city reducer");
//   const [value, setValue] = useState("");
//   const dispatch = useDispatch();
//   const postOffices = useSelector((state) => state.city.info);

//   useEffect(() => {
//     dispatch(getPostoffice);
//   }, []);
//   return (
//     <div>
//       <input
//         placeholder="search post offices"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       {/* <ul>
//         {postOffices
//           ?.filter(
//             (postOffice) =>
//               postOffice.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
//           )
//           .map((postOffice) => (
//             <li>{postOffice.Name} </li>
//           ))}
//       </ul> */}
//     </div>
//   );
// };
// const Middleware = () => {
//   return (
//     <Provider store={store1}>
//       <div>
//         <Counter />
//         <Citysearch />
//       </div>
//     </Provider>
//   );
// };

// export default Middleware;

// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";

// const initialState = {
//   count: 10,
//   value: 1,
// };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "inc") {
//     const incrementcount = action.payload;
//     return { count: state.count + incrementcount };
//   }
//   return state;
// };

// const cityReducer = (state = {info: null}, action) => {
//   if(action.type === "fetch-data"){
//     return {...state, info: action.payload}
//   }
//    return state;
// };
// // to combiner reducers we use combineReducers. with own names as
// const rootReducer = combineReducers({
//      counter: counterReducer,
//      city: cityReducer,
// });

// const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;

// Redux-thunk => gives us middleware functionality for redux store.
// by default dispatch function always takes action object as argument as {type: "inc", payload: optional}
// once we integrate middleware(redux-thunk) => we can pass function as argument to dispatch method.
// normal dispatch =>  dispatch({type: "inc"})
// with middleware dispatch =>  dispatch(() => {})


  const delay = () => {
    return new Promise((r) => {
      setTimeout(r, 3000);
    });
  };
  
  // asyncIncrementCount is a middleware.
  // middleware function(asyncIncrementCount) => gets 2 callbacks (1. dispatch function 2. getState.)
  
  /*
  A middleware can do anything it wants when it sees a dispatched action:
  
  Log something to the console
  Set timeouts
  Make asynchronous API calls
  Modify the action
  Pause the action or even stop it entirely
   */
  
  export async function asyncIncrementCount(dispatch, getState) {
    await delay();
    // console.log(getState());
    dispatch({ type: "inc", payload: 5 });
  }
  
  export async function getPostoffice(dispatch, getState) {
    try{
      const response = await fetch("https://api.postalpincode.in/pincode/531055");
      const data = await response.json();
      // console.log(getState());
      dispatch({type: "fetch-data", payload: data});
    }
    catch(error){};
  }