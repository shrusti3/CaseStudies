// Interface-like base class for notifications
class NotificationService {
  send(to, message) {
    throw new Error("send() must be implemented");
  }
}

module.exports = NotificationService;
