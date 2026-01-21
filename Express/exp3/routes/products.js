
const express = require("express");
const router = express.Router();

// Sample in-memory data
let products = [
  { id: "1", name: "Bananas", price: 1.5, inStock: true },
  { id: "2", name: "Apples", price: 2.0, inStock: false },
];

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// POST new product
router.post("/", (req, res) => {
  const { name, price, inStock } = req.body;
  if (name === undefined || price === undefined || inStock === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newProduct = {
    id: (products.length + 1).toString(),
    name,
    price,
    inStock,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT replace product
router.put("/:id", (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { name, price, inStock } = req.body;
  if (name === undefined || price === undefined || inStock === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  products[index] = { id: req.params.id, name, price, inStock };
  res.status(200).json(products[index]);
});

// PATCH update price
router.patch("/:id/price", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { price } = req.body;
  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ error: "Invalid price" });
  }

  product.price = price;
  res.status(200).json(product);
});

// PATCH update inStock (CHALLENGE)
router.patch("/:id/inStock", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { inStock } = req.body;
  if (typeof inStock !== "boolean") {
    return res.status(400).json({ error: "Invalid inStock value" });
  }

  product.inStock = inStock;
  res.status(200).json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;


//Implemented RESTful API endpoints using Express.
//Used appropriate HTTP methods (GET, POST, PUT, PATCH, DELETE) and status codes for clear request handling.
//Validated input data and handled error cases to ensure reliable communication between client and server.
//checked all req,res with Postman