const express = require("express");
const app = express();

app.use(express.json());

// Mount redeem routes
const redeemRouter = require("./routes/redeem");
app.use("/redeem", redeemRouter);

// Root check
app.get("/", (req, res) => {
  res.send("FreshMart Loyalty API");
});

// Global error handler (basic version)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    status: "error",
    error: "Internal server error",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
