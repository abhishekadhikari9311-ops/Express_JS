
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
app.get("/about/:name/:slug",(req,res)=>{
  console.log(req.params);
  const formattedSlug=req.params.slug.replace(/-/gi," ")
  
  res.send(`mine name is ${req.params.name} ${formattedSlug}.`)
})

// single vs multi query parameter 
app.get("/contact",(req,res)=>{
  console.log(req.query);
  res.send(`mine name is ${req.query.name} and mine age is ${req.query.age}.`)
})

// form submissions in express js
// app.get("/shorten",(req,res)=>{
//   console.log(req.query.url,req.query.short-code);
//   res.send(`hello ${req.query.url}--->${req.query.short-code}`)
// })

app.use((req,res)=>{
  return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
