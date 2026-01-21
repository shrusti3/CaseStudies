/*Declare a variable called city and assign it your favorite city as a string.

Declare a variable called temperature with type number and assign it a value.

Create a variable called isRaining and let TypeScript infer its type from the value you assign.

Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
"In <city>, it is <temperature>°C. Is it raining? <true/false>"

Try calling the function with your variables.*/

//favourite city
var city: string = "Mumbai";

//temperature
var temperature: number = 25;

var isRaining = true;//isRaining task


//functions
function weatherReport(favouriteCity: string, temp: number, raining: boolean) {
    console.log("In " + favouriteCity + ", it is " + temp + "°C. Is it raining? " + raining);
}

//calling the function
weatherReport(city,temperature,isRaining)


