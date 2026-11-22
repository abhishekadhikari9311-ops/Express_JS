
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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
