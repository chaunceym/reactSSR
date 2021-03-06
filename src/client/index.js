import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { getClientStore } from "../store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      {/*<BrowserRouter>{Routes}</BrowserRouter>*/}
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
