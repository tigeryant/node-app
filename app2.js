const express = require("express");
const morgan = require("morgan");
const logger = require('./logger')
const authorize = require('./authorize')

const app = express();

app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", [logger, authorize], (req, res) => {
  res.send("Products");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
