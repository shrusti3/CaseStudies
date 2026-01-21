const express = require("express");
const app = express();

app.use(express.json());

// Root route (THIS fixes your error)
app.get("/", (req, res) => {
  res.send("CityCare Hospital API is running");
});

// middleware imports
const logRequest = require("./middleware/logRequest");
const doctorCheck = require("./middleware/doctorCheck");
const pharmacyCheck = require("./middleware/pharmacyCheck");
const insuranceCheck = require("./middleware/insuranceCheck");
const followupCheck = require("./middleware/followupCheck");

app.use(logRequest);

app.post(
  "/discharge",
  doctorCheck,
  pharmacyCheck,
  insuranceCheck,
  followupCheck,
  (req, res) => {
    res.json({
      status: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog,
    });
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
