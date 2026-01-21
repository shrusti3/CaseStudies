// Business logic depends on abstraction, not implementation
class AppointmentService {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  bookAppointment(patient, time) {
    this.notificationService.send(
      patient,
      `Your appointment is booked for ${time}`
    );
    return { status: "confirmed" };
  }
}

module.exports = AppointmentService;
