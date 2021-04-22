import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (store, routes, req) => {
  const content = renderToString(
    <Provider store={store}>
      {/*<StaticRouter location={req.path}>{Routes}</StaticRouter>*/}
      <StaticRouter location={req.path}>
        <div>{renderRoutes(routes)}</div>
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
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
