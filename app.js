const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080...");
});
