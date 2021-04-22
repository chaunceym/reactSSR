import React from "react";
import { Route } from "react-router-dom";
import Home from "./common/Home";
import Login from "./common/Login";

// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Index} />
//   </div>
// );

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: "home",
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    key: "login",
  },
];
