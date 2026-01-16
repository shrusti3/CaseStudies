//Create a variable for your favorite fruit and print it

/*this file involves the type script case study 2
this is task 3, adding single lline and multiline comments*/

let favouriteFruit:  string  =  "Pomegranate";
console.log("My Favourite fruit is "+favouriteFruit)

//Double a number and print it

function doubleNumber(n:number):void{
  let result=n*2;
  console.log("Double of " + n + " is: " + result)
}
doubleNumber(30);

class Person {
  sayHello(): void {
    console.log("Hi i am  a Person!");
  }
}
let person = new Person();
person.sayHello();

