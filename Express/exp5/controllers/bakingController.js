const express = require("express");
const router = express.Router();

// Fake baking status store
const bakingStatus = {};

// POST /baking/start
router.post("/start", (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({
      status: "error",
      error: "Order ID is required",
    });
  }

  bakingStatus[orderId] = "Baking started";

  res.json({
    status: "success",
    message: `Baking started for order ${orderId}`,
  });
});

// GET /baking/status/:id
router.get("/status/:id", (req, res) => {
  const status = bakingStatus[req.params.id];

  if (!status) {
    return res.status(404).json({
      status: "error",
      error: "Order not in baking process",
    });
  }

  res.json({
    status: "success",
    data: status,
  });
});

module.exports = router;

//mplemented a modular Express application using controllers, middleware, and request validation to ensure clean routing, early error detection, and structured responses.