import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../common/Home/store";
import clientAxios from "../client/request";
import serverAxios from "../server/request";

const reducer = combineReducers({
  home: homeReducer,
});

// 为了防止导出单例的 store, 每个函数执行会得到不一样的 store
export const getServerStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
