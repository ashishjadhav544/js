//if statement :- Executes code only if a condition is true.

if(true){
  console.log("executed");
}


const isloggedIn = true

if(isloggedIn){
  console.log("entry accessed");
}


const temperature = 50

if(temperature == 50){
  console.log("very humid")
}



  if(50 === "50"){
    console.log("equal")
  }

  if( 2 != 3){
    console.log("hello")
  }

//if...else

// Runs one block if the condition is true; otherwise, runs another block.
  
const age = 20

if(age >= 18){
  console.log("you are elligible");
}else{
  console.log("you are not elligible");
}



const temp = 30;

if (temp === 30){
  console.log("moderate temeprature");
}else{
  console.log("very humid");
}



const score = 200;

if(score > 100){
  const power = "fly";
  console.log(`user power:${power}`);
}
// console.log(`${power}`)


//else if

// Checks multiple conditions.


const balance = 1000;

if(balance < 500){
  console.log("less than 500");
}else if(balance < 750){
  console.log("less than 750");
}else if(balance < 900){
  console.log("less than 900");
}else{
  console.log("more than 1000")
}



//AND (&&)

// Both conditions must be true.

const isLoggedIn = true
const debited = true

if(isLoggedIn && debited){
  console.log("allowed")
}


// OR (||)

// At least one condition must be true.

const isLoggedIn1 = true
const debited1 = false

if(isLoggedIn1 || debited1){
  console.log("allowed")
}


// NOT (!)

// Reverses a boolean.

let isLoggedIn2 = false;

console.log(!isLoggedIn);




//switch

// Used when comparing one value against multiple possible values.

const month = 2;

switch(month){
  case 1: 
    console.log("jan");
    break;
  case 2: 
    console.log("feb");
    break;
  case 3: 
    console.log("march");
    break;
  case 4: 
    console.log("april");
    break;
  default:
    console.log("default value");
}


const month1 = "jan";

switch(month1){
  case "jan": 
    console.log("jan");
    break;
  case "feb": 
    console.log("feb");
    break;
  case "march": 
    console.log("march");
    break;
  case "april": 
    console.log("april");
    break;
  default:
    console.log("default value");
}



// Truthy and Falsy Values

// JavaScript converts values to true or false in conditions.

const email = "ashish@gmail.com"

if(email){
  console.log("email is there");
}else{
  console.log("email is not there");
}

//falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

//checking arrays
const arr = [];

if (arr.length === 0) {
    console.log("Array is empty");
}


//checking objects
const user = {};

if (Object.keys(user).length === 0) {
    console.log("Object is empty");
}





// Nullish Coalescing Operator (??)

// Returns the right-hand value only when the left-hand value is null or undefined.
//ignores null and undefined


let value;
value = 10 ?? 20
value1 = null ?? 10
value2 = undefined ?? 10
value3 = null ?? 10 ?? 20
value4 = null ?? undefined

console.log(value);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);


// ternary Operator

// Short form of if...else.
// condition ? true : false

let age1 = 18;
age1 >= 19 ? console.log("elligible") : console.log("not elligible");