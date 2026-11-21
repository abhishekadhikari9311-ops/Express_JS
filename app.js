const express = require("express");
let app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>hello world! about</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});