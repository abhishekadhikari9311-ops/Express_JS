import express from "express"
import path from "path"
import {PORT} from "./env.js";
let app = express();

// const PORT = process.env.PORT || 5000;

// console.log(__dirname,__filename);

// console.log(import.meta.dirname);
// console.log(import.meta.filename);
const filePath=path.join(import.meta.dirname,"public","index.html")

app.get("/", (req, res) => {
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});