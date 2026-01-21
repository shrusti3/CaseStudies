const NotificationService = require("./NotificationService");

// Another implementation
class EmailService extends NotificationService {
  send(to, message) {
    console.log(`Email sent to ${to}: ${message}`);
  }
}

module.exports = EmailService;
