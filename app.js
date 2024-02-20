const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{name: 'john'}, {name: 'susan'}]);
});

app.listen(8080, () => {
  console.log("server is listening on port 8080...");
});
