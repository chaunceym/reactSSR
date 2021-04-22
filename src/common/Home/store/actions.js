import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

// const getUrl = (server) => {
//   return server ? "http://localhost:4000/api/news.json" : "/api/news.json";
// };

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/news.json").then((res) => {
      const list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
