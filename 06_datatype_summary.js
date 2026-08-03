//primitive data types
// string, number, boolean, null, undefined, symbol,bigint

let name = "ashish"
let age = 22;
let isStudent = true; 
let isdefined = null;
let isundefined;
let id = Symbol('123');
let bigNumber = 1234567890123456789012345678901234567890n;
//always write n after the number to represent it as a bigint


console.log(typeof id);
console.log(typeof bigNumber);



//non-primitive (reference) data types
//object, array, function

//object is a collection of key value pairs
let person = {
  name : "ashish",
  age : 22,
  isStudent : false
}

//array is a collection of similar or different data types
//let person = ["ashish", "anil", "sunil", "rahul"];
let person1 = ["ashish", 22, true, null, undefined, Symbol('123'), 1234567890123456789012345678901234567890n];

//function is a block of code that can be called and executed when needed
let person2 = function(){
  console.log("ashish");
}

person2();


// to find which datatype we use typeof operator, it will return the datatype of the variable or value we pass to it. It will return a string value of the datatype.

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);  