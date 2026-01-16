const session = db.getMongo().startSession();
session.startTransaction();

try {
  const refundAmount = 100.00;
  const originalTxId = ObjectId("665f4d7e8b3e6c1e24a7b3e9");
  const aliceId = ObjectId("665f4d7e8b3e6c1e24a7b3e1"); //Sender
  const bobId = ObjectId("665f4d7e8b3e6c1e24a7b3e2");   //Recipient

  //Adding refund amount back to Alice
  db.users.updateOne(
    { _id: aliceId },
    { $inc: { balance: refundAmount } },
    { session }
  );

  // substracting refund amount from Bob
  //including a balance check in the filter to ensure Bob has the funds
  const result = db.users.updateOne(
    { _id: bobId, balance: { $gte: refundAmount } }, 
    { $inc: { balance: -refundAmount } },
    { session }
  );

  if (result.matchedCount === 0) {
    throw new Error("Recipient has insufficient funds for refund.");
  }

  //Update the original transaction status to "refunded"
  db.transactions.updateOne(
    { _id: originalTxId },
    { $set: { status: "refunded" } },
    { session }
  );

  // Log a new transaction record for the refund
  db.transactions.insertOne(
    {
      from: bobId,
      to: aliceId,
      amount: refundAmount,
      type: "refund",
      relatedTransaction: originalTxId,
      date: new Date(),
      status: "completed"
    },
    { session }
  );

  //Commit all changes
  session.commitTransaction();
  console.log("Refund processed successfully.");

} catch (error) {
  //anything fails, undo all 
  session.abortTransaction();
  console.error("Refund failed, rolling back. Reason:", error.message);
} finally {
  session.endSession();
}