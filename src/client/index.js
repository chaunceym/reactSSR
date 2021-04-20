import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import Home from "../common/Home";

ReactDom.hydrate(<Home />, document.getElementById("root"));
