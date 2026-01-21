function insuranceCheck(req, res, next) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({
      error: "Insurance approval required",
    });
  }

  req.dischargeLog.push({
    step: "insuranceApproved",
    time: new Date().toISOString(),
  });

  next();
}

module.exports = insuranceCheck;
