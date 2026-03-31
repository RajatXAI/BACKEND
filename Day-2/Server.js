const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Day-2 Express is running");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(3000);
