import React from "react";
import { Route } from "react-router-dom";
import Home from "./common/Home";
import Index from "./common/Login";

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Index} />
  </div>
);
