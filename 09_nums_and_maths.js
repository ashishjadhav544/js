//Numbers are primitive data types in JavaScript that represent numeric values. They can be integers or floating-point numbers. JavaScript provides various methods to work with numbers, including formatting and converting them to strings.
const number = 42;
console.log(`the number is ${number}`); // it is new way of concatenation in js

const myNumber = new Number(1000);

console.log(myNumber.toString().length); // it is used to convert the number into string
console.log(myNumber.toFixed(1)); // it is used to format the number to a specified number of decimal places
console.log(myNumber.toExponential(1)); // it is used to format the number in exponential notation with a specified number of decimal places
console.log(myNumber.toLocaleString("en-IN")); // it is used to format the number according to the locale of the user
console.log(myNumber.valueOf(4)); // it is used to get the primitive value of the number

const myNumber2 = 123456789.123456789;
console.log(myNumber2.toPrecision(4)); // it is used to format the number to a specified length


//math is a built-in object in JavaScript that provides various mathematical functions and constants. It is not a constructor, so we cannot create instances of it. Instead, we can use its static methods and properties directly.

console.log(Math);
console.log(Math.PI); // it is used to get the value of pi
console.log(Math.abs(-4)) // it is used to get the absolute value of a number
console.log(Math.ceil(4.2)); // it is used to round a number up to the nearest integer
console.log(Math.floor(4.8)); // it is used to round a number down to the nearest integer
console.log(Math.round(4.2)); // it is used to round a number to the nearest integer
console.log(Math.max(2,4,6,8,10)); // it is used to get the maximum value from a set of numbers
console.log(Math.min(2,4,6,8,10)); // it is used to get the minimum value from a set of numbers

console.log(Math.random()); // it is used to generate a random number between 0 and 1
console.log(Math.random()*10 + 1); // it is used to generate a random number between 1 and 10
console.log(Math.floor(Math.random()*10 + 1)) // it is used to generate a random integer between 1 and 10


const min = 1;
const max =50;

console.log(Math.floor(Math.random() * (max-min+1)) + min);// it is formula to get max and min  between range.