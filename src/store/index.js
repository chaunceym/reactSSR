import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../common/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
