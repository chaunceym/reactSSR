import app from "./https";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../common/Home";
import { render } from "./utils";

const content = renderToString(<Home />);

// 演示1
// app.get("/", (req, res) => {
//   res.send(`
//        <html>
//       <head>
//         <title>SSR</title>
//       </head>
//       <body>
//         <h1>React SSR 分享会</h1>
//         <p>我正在讲解使用 node 作为后端来返回 HTML 数据</p>
//       </body>
//     </html>
//   `);
// });

// 演示2
// app.get("/", (req, res) => {
//   res.send(`
//        <html>
//       <head>
//         <title>SSR</title>
//       </head>
//       <body>
//         <h1>React SSR 分享会</h1>
//         <p>我正在讲解使用 node 作为后端来返回 HTML 数据</p>
//         <div>${content}</div>
//       </body>
//     </html>
//   `);
// });

// 演示3
// app.get("/", (req, res) => {
//   res.send(`
//        <html>
//       <head>
//         <title>SSR</title>
//       </head>
//       <body>
//         <h1>React SSR 分享会</h1>
//         <div id="root">${content}</div>
//         <script>
//           console.log('I am script')
//         </script>
//         <script src="/index.js"></script>
//       </body>
//     </html>
//   `);
// });

app.get("*", (req, res) => {
  res.send(render(req));
});
