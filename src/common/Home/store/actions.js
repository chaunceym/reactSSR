import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    // return axios.get("http://localhost:4000/api/news.json").then((res) => {
    //   // const list = res.data.data;
    //   // console.log(list);
    //   const list = [
    //     {
    //       id: 1,
    //       title: "1111111",
    //     },
    //     {
    //       id: 2,
    //       title: "2222222",
    //     },
    //     {
    //       id: 3,
    //       title: "3333333",
    //     },
    //     {
    //       id: 4,
    //       title: "4444444",
    //     },
    //   ];
    //   dispatch(changeList(list));
    // });
    setTimeout(() => {
      const list = [
        {
          id: 1,
          title: "1111111",
        },
        {
          id: 2,
          title: "2222222",
        },
        {
          id: 3,
          title: "3333333",
        },
        {
          id: 4,
          title: "4444444",
        },
      ];
      dispatch(changeList(list));
    });
  };
};
