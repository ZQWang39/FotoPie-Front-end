import { combineReducers } from "redux";

import counter from "./counter/counterSlice";

const reducers = combineReducers({
  counter,
});

export default reducers;
