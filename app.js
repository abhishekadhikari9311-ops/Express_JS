
import express from "express";
import path from "path";
import { PORT } from "./env.js";

const app = express();

// Resolve the public HTML file
const filePath = path.join(
  import.meta.dirname,
  "public"
);

app.use(express.static(filePath))

// Home route
app.get("/", (req, res) => {
  res.sendFile(filePath);
});
// single vs multi route parameter
app.get("/about/:name/:surname",(req,res)=>{
  console.log(req.params);
  
  res.send(`mine name is ${req.params.name} ${req.params.surname}.`)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
