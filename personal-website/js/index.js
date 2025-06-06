import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// Optional: serve static files like CSS or images
app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/resume.html"));
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contacted</h1>");
});
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
