/*checkSign(num: number): void
Use an if statement to log whether num is positive.
evenOrOdd(num: number): void
Use an if…else to log whether num is even or odd.
getGrade(score: number): string
Use an if…else if…else ladder to return a letter grade:
score ≥90 → "A"
score ≥80 → "B"
score ≥70 → "C"
score ≥60 → "D"
otherwise "F"
provideFeedback(grade: string): void
Use a switch to log a feedback message for each grade ("A"… "F"), with a default for any unexpected value.*/


// 1. Simple if
function checkSign(num:number):void
{
  if(num>0){
    console.log(`${num}  is Positive.`);
  }
}

// 2. if...else
function evenOrOdd(num:number):void
{
  if(num%2==0){
    console.log(`${num}  is EVEN.`);
  }
  else{
    console.log(`${num}  is ODD.`);
  }
}

// 3. if...else if ladder
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 4. switch statement
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Feedback: Excellent performance!");
      break;
    case "B":
      console.log("Feedback: Great job! Keep it up.");
      break;
    case "C":
      console.log("Feedback: Good effort; aim higher next time.");
      break;
    case "D":
      console.log("Feedback: Needs improvement; review your work.");
      break;
    case "F":
      console.log("Failed. Let's schedule a review.");
      break;
    default:
      console.log("INVAILID GRADE.");
      break;
  }
}

//example usage
checkSign(55);
evenOrOdd(3);
const myScore = 85;
const myGrade = getGrade(myScore);
provideFeedback(myGrade);