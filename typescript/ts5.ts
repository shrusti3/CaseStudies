
let database: Record<string, any> = {};

function recordAnswer(questionId: string, answer: any): void {
    console.log(`Saving answer for QID ${questionId}...`);
    database[questionId] = answer;
}

// 1. Storing a String
recordAnswer("q1", "My name is Shrusti");

// 2. Storing a Number
recordAnswer("q2", 10);

// 3. Storing an Array
recordAnswer("q3", ["Mangoes", "Pomegranate", "Grapes"]);

// Print all recorded answers
console.log("--- Current Database ---");
console.log(database);