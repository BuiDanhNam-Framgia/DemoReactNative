import taskListReducer from "../reducers/ListTaskReducer";
// import { numberReducer } from "../reducers/NumberReducer";

// const store = createStore(
//   combineReducers({
//     numberReducer,
//     taskListReducer
//   })
// );

import { createStore, combineReducers, applyMiddleware } from "redux";
const store = createStore(
  combineReducers({
    number: numberReducer,
    taskList: taskListReducer
  })
);

export default store;
