import React from "react";
import Header from "./Header";
import { renderRoutes } from "react-router-config";

const App = (props) => {
  // console.log(props.route);
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
