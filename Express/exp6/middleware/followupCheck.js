function followupCheck(req, res, next) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({
      error: "Follow-up appointment must be scheduled",
    });
  }

  req.dischargeLog.push({
    step: "followupScheduled",
    time: new Date().toISOString(),
  });

  next();
}

module.exports = followupCheck;
