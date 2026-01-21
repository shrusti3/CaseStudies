const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const productsRouter = require("./routes/products");



// Root route
app.get("/", (req, res) => {
  res.send("Neighborhood Food Store API");
});

// Products routes
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
