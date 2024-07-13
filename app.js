const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.listen(8000, () => {
  console.log(`running`);
});
