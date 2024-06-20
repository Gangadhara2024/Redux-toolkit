import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const initialstate = {
  count: 10,
  value: 2,
};
const reducer = (state = initialstate, action) => {
  if (action.type === "inc") {
    const incCount = action.payload;
    return { ...state, count: state.count + incCount };
  }
  return state;
};
const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

// Redux-thunk => gives us middleware functionality for redux store.
// by default dispatch function always takes action object as argument as {type: "inc", payload: optional}
// once we integrate middleware(redux-thunk) => we can pass function as argument to dispatch method.
// normal dispatch =>  dispatch({type: "inc"})
// with middleware dispatch =>  dispatch(() => {})

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
