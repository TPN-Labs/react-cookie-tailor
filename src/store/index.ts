import { createStore, combineReducers, compose } from "redux";

import behavior from "./reducers/behaviorReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducer = combineReducers({ behavior });

export default createStore(reducer, composeEnhancers());
