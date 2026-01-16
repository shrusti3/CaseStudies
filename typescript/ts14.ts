// 1. Generic Class: FeedbackBox
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

// 2. Generic Function: getFirstItem
// It takes an array of any type T and returns one item of type T or undefined
function getFirstItem<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

// --- Testing the Logic ---

//1 Storing simple string feedback
const stringBox = new FeedbackBox<string>();
stringBox.addFeedback("Great lesson!");
const firstStr = getFirstItem(stringBox.getAllFeedback()); 
console.log(`First string feedback: ${firstStr}`); // TypeScript knows this is a string

//2 Storing complex object feedback
type RatingFeedback = { stars: number; user: string };
const ratingBox = new FeedbackBox<RatingFeedback>();
ratingBox.addFeedback({ stars: 5, user: "Shrusti" });

const firstRating = getFirstItem(ratingBox.getAllFeedback());
console.log(`User ${firstRating?.user} gave ${firstRating?.stars} stars.`);