function doctorCheck(req, res, next) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({
      error: "Doctor sign-off required",
    });
  }

  req.dischargeLog.push({
    step: "doctorSignoff",
    time: new Date().toISOString(),
  });

  next();
}

module.exports = doctorCheck;
