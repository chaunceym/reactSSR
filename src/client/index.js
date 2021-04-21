import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import Home from "../common/Home";

const App = () => {
  return <BrowserRouter>{Routes}</BrowserRouter>;
};

ReactDom.hydrate(<App />, document.getElementById("root"));
