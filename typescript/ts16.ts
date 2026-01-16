// Observer interface
interface Observer {
  update(msg: string): void;
}

// Customer and Iventory
class Customer implements Observer {
  update(msg: string) {
    console.log("Customer:", msg);
  }
}

class Inventory implements Observer {
  update(msg: string) {
    console.log("Inventory:", msg);
  }
}

//Promotion System
class PromotionSystem implements Observer {
  update(msg: string) {
    console.log("Promotion:", "30% off on your next drink!");
  }
}

// Subject
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(obs: Observer) {
    this.observers.push(obs);
  }

  notifyAll(msg: string) {
    this.observers.forEach(obs => obs.update(msg));
  }

  completeOrder() {
    this.notifyAll("Order complete!");
  }
}

// Test it
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());

order.completeOrder();
