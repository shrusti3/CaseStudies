const express = require("express");
const router = express.Router();
const validateOrder = require("../middleware/validateOrder");

// Fake database
const orders = [
  {
    id: "1",
    customerName: "Maria",
    flavor: "vanilla",
    quantity: 2,
    pickupDate: "2024-07-10",
  },
];

// GET /orders → view all orders
router.get("/", (req, res) => {
  res.json({
    status: "success",
    data: orders,
  });
});

// GET /orders/:id → check order status
router.get("/:id", (req, res) => {
  const order = orders.find(o => o.id === req.params.id);

  if (!order) {
    return res.status(404).json({
      status: "error",
      error: "Order not found",
    });
  }

  res.json({
    status: "success",
    data: order,
  });
});

// POST /orders → create new order
router.post("/", validateOrder, (req, res) => {
  const newOrder = {
    id: (orders.length + 1).toString(),
    ...req.body,
  };

  orders.push(newOrder);

  res.status(201).json({
    status: "success",
    data: newOrder,
  });
});

module.exports = router;
