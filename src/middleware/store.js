// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";

// const initialstate = {
//   count: 10,
//   value: 2,
// };
// const counterReducer = (state = initialstate, action) => {
//   if (action.type === "inc") {
//     const incCount = action.payload;
//     return { ...state, count: state.count + incCount };
//   }
//   return state;
// };
// const cityReducer = (state = { info: "null" }, action) => {
//   if (action.type === "fetched_data") {
//     return { ...state, info: action.payload };
//   }
//   return state;
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   city: cityReducer,
// });
// const store = legacy_createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;

// By using redux middleware we can have asynchronous code to run with certain time, so we use middleware.
// Redux-thunk => gives us middleware functionality for redux store.
// by default dispatch function always takes action object as argument as {type: "inc", payload: optional}
// once we integrate middleware(redux-thunk) => we can pass function as argument to dispatch method.
// normal dispatch =>  dispatch({type: "inc"})
// with middleware dispatch =>  dispatch(() => {})

// asyncInc Count is a middleware.
// middleware function(asyncIncrementCount) => gets 2 callbacks (1. dispatch function 2. getState.)

/*
  A middleware can do anything it wants when it sees a dispatched action:
  
  Log something to the console
  Set timeouts
  Make asynchronous API calls
  Modify the action
  Pause the action or even stop it entirely
   */

// combineReducers: ==> can combine reducers as
/**
    const rootReducer = combineReducers({
    counter: counterReducer,
    city: cityReducer,
    });
 */

// for Redux Toolkit installation we use npm i @reduxjs/toolkit.
