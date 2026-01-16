interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Bank Transfer.`);
    return true; // simulate success
  }
}

class FailingMockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount}.`);
    return false; // shows failure
  }
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  }
}

const bankGateway = new BankTransferGateway();
const bankProcessor = new PaymentProcessor(bankGateway);

bankProcessor.pay(500);

//failing mockgateway test
const mockGateway = new FailingMockGateway();
const testProcessor = new PaymentProcessor(mockGateway);

testProcessor.pay(300);
