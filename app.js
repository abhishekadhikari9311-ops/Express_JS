const express = require("express");
const PORT = require("./env.js");
let app = express();

// const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>hello world! about</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
