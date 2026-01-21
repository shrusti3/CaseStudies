function validateOrder(req, res, next) {
  const { customerName, flavor, quantity, pickupDate } = req.body;

  if (!customerName || !flavor || !pickupDate) {
    return res.status(400).json({
      status: "error",
      error: "Missing required order details",
    });
  }

  if (typeof quantity !== "number" || quantity < 1) {
    return res.status(400).json({
      status: "error",
      error: "Quantity must be at least 1",
    });
  }

  // If validation passes, move to controller
  next();
}

module.exports = validateOrder;
