const NotificationService = require("./NotificationService");

// Concrete implementation
class SMSService extends NotificationService {
  send(to, message) {
    console.log(`SMS sent to ${to}: ${message}`);
  }
}

module.exports = SMSService;
