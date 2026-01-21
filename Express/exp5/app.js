const express = require("express");
const app = express();

app.use(express.json());

// Import controllers
const ordersController = require("./controllers/ordersController");
const bakingController = require("./controllers/bakingController");

// Mount controllers
app.use("/orders", ordersController);
app.use("/baking", bakingController);

// Root check
app.get("/", (req, res) => {
  res.send("Crumb & Craft Bakery API");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
