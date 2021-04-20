import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server is running on 3000");
});

export default app;
