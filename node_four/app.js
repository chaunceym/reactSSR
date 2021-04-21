const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send({
    data: [
      {
        id: 1,
        title: "1111111",
      },
      {
        id: 2,
        title: "2222222",
      },
      {
        id: 3,
        title: "3333333",
      },
      {
        id: 4,
        title: "4444444",
      },
    ],
  });
});
app.listen(4000, () => {
  console.log("running 4000");
});
