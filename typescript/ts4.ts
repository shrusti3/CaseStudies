//Declare a variable score with let and assign it a number.
let score: number=50;
console.log("Initial Score:",score);

//Inside a block (e.g., an if statement), declare another score variable with a different value and print it.
if(true)
{
  let score=100;
  console.log("Block Score:",score);
}

const COUNTRY: string="India";
console.log("Country:",COUNTRY);

//Try to change the value of 'COUNTRY'
//COUNTRY= "Japan"; 
//Cannot assign to 'COUNTRY' because it is a constant.

//Try to re-declare 'score' in the same block
//let score: number = 67;
//Cannot redeclare block-scoped variable 'score'.