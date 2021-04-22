import React from "react";
import Routes from "../Routes";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import store from "../store";
import { renderRoutes, matchRoutes } from "react-router-config";

const serverStore = store();

export const render = (req) => {
  const matchedRoutes = matchRoutes(Routes, req.path);
  const promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(serverStore));
    }
  });

  Promise.all(promises).then((res) => {});

  const content = renderToString(
    <Provider store={serverStore}>
      {/*<StaticRouter location={req.path}>{Routes}</StaticRouter>*/}
      <StaticRouter location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR 分享会</h1>
        <div id="root">${content}</div>
        <script>
          console.log('I am script')
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
