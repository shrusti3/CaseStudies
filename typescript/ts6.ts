// Helper function: This returns 'never' because it ALWAYS crashes the program.
function throwError(message: string): never {
    throw new Error(message);
}

function processTransaction(amount: number, description: string | undefined, isCredit: boolean): void {
    
    // 1. Validation Logic (The 'never' check)
    if (amount < 0) {
        // We call our 'never' function here
        throwError("Transaction Failed: Amount cannot be negative.");
    }

    // 2. Handling 'undefined'
    const safeDescription = description ? description : "General Transaction";

    // 3. Processing Logic
    const type = isCredit ? "Credit (+)" : "Debit (-)";
    
    console.log(`Processing: ${type} $${amount}`);
    console.log(`Details: ${safeDescription}`);
    console.log("----------------------------");
}

//Testing 

// Case 1: A valid transaction with all details
processTransaction(150, "Freelance Payment", true);

// Case 2: A valid transaction with MISSING description (undefined)
processTransaction(20, undefined, false);

// Case 3: Invalid transaction (Will crash/throw error)
processTransaction(-50, "Refund", true);