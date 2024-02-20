const express = require("express");
const logger = require('./logger')

const app = express();

app.use('/api', logger)

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
