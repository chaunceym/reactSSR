import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../common/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

// 为了防止导出单例的 store, 每个函数执行会得到不一样的 store
const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export const serverStore = getServerStore();

const getClientStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export const clientStore = getClientStore();
