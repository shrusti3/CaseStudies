const express = require("express");
const AppointmentService = require("./services/AppointmentService");
const SMSService = require("./services/SMSService");
// const EmailService = require("./services/EmailService");

const app = express();
app.use(express.json());

// Dependency injection happens HERE
const notificationService = new SMSService();
// Swap easily:
// const notificationService = new EmailService();

const appointmentService = new AppointmentService(notificationService);

app.post("/appointments", (req, res) => {
  const { patient, time } = req.body;
  const result = appointmentService.bookAppointment(patient, time);
  res.json(result);
});

app.listen(3000, () => {
  console.log("Clinic system running on port 3000");
});
