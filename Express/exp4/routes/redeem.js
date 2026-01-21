const express = require("express");
const { z } = require("zod");

const router = express.Router();

// Zod schema to validate request body
const RedeemSchema = z.object({
  customerId: z.string(),
  points: z.number().int().positive(),
});

// POST /redeem
router.post("/", (req, res) => {
  // Validate request body
  const result = RedeemSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      error: result.error.errors[0].message,
    });
  }

  const { customerId, points } = result.data;

  // Dummy business logic (no database)
  if (points > 500) {
    return res.status(400).json({
      status: "error",
      error: "Insufficient points",
    });
  }

  // Success response
  res.status(200).json({
    status: "success",
    data: {
      customerId,
      remainingPoints: 500 - points,
    },
  });
});

module.exports = router;
