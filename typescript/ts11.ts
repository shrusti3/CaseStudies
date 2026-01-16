/*Add a counter for each transaction type (checkout, return, priority, cancelled) using a for loop and an object.
Use a while(true) infinite loop with a break condition when a new priority transaction arrives.
Modify the do…while loop to handle a dynamic queue (an array you can push new returns into).
Use for…in to reset all inventory counts to zero.
Display visitor names in reverse order using a for or for…of loop.*/

// --- 1. DATA SETUP (The "Stuff" to process) ---
type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

// --- 2. LOGIC (The loops) ---

console.log("--- Starting Transaction Processing ---");

// A: Processing the Transaction List (for...of)
for (const tx of transactions) {
  if (tx.type === "cancelled") {
    console.log(`Skipping Transaction ${tx.id}: Cancelled`);
    continue; // Skip to next
  }

  console.log(`Processing ${tx.type} for ID: ${tx.id}`);

  if (tx.type === "priority") {
    console.log("URGENT: Priority book found. Stopping belt!");
    break; // Stop the loop entirely
  }
}

console.log("\n--- Resetting Inventory Ledger ---");

// B: Resetting the Inventory (for...in)
for (const title in inventory) {
  inventory[title] = 0; // Set stock to zero
  console.log(`Inventory for '${title}' is now ${inventory[title]}`);
}

console.log("\n--- Saying Goodbye to Visitors ---");

// C: Reversing the Visitor List (Standard for loop)
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(`Goodbye, ${visitors[i]}!`);
}

//counter
let counts = { checkout: 0, return: 0, priority: 0, cancelled: 0 };

for (const tx of transactions) {
  counts[tx.type]++;
}
console.log("Transaction Totals:", counts);


//while
let i = 0;
while (true) {
  let tx = transactions[i];
  console.log(`Checking bin ${tx.id}...`);

  if (tx.type === "priority") {
    console.log("Found Priority! Emergency stop.");
    break;
  }
  i++;
}

//do while
let returnQueue = [{ id: 101, type: "return" }];

do {
  let processed = returnQueue.shift();
  console.log(`Processed return: ${processed?.id}`);

  // Simulating a new return arriving suddenly
  if (returnQueue.length === 0 && Math.random() > 0.5) {
     returnQueue.push({ id: 102, type: "return" });
     console.log("A new return was just dropped off!");
  }
} while (returnQueue.length > 0);

//reset inventory
for (const title in inventory) {
  inventory[title] = 0;
}
console.log("Inventory after reset:", inventory);

//reverse visitors
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(`Visitor: ${visitors[i]}`);
}
