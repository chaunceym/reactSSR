import React from "react";
import Routes from "../Routes";
import { Route, StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import store from "../store";

export const render = (req) => {
  const content = renderToString(
    <Provider store={store()}>
      {/*<StaticRouter location={req.path}>{Routes}</StaticRouter>*/}
      <StaticRouter location={req.path}>
        <div>
          {Routes.map((route) => {
            <Route {...route} />;
          })}
        </div>
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
