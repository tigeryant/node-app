const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user visited default route");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("user visited about route");
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080...");
});
