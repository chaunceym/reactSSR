import app from "./https";
import React from "react";
import { renderToString } from "react-dom/server";
//将组件转成字符串格式
import Home from "../common/Home";

const content = renderToString(<Home />);
app.get("/", (req, res) => {
  res.send(`
       <html lang="zh">
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>I am nihc</h1>
        <div id="root">${content}</div>
        <script >
          console.log('I am script') 
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});
