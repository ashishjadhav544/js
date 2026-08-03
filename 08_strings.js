//string is a data type in js which is used to store text data. it is a sequence of characters. it is immutable in nature. it means once we create a string we cannot change it. we can only create a new string from the existing string.
const name = "ashish";
const age = 22;

// console.log(name + " is " + age + " years old");// it is old way of concatenation in js
//console.log("my name is " + name + " and my age is " + age); // it is old way of concatenation in js

console.log(`my name is ${name} and my age is ${age}`); // it is new way of concatenation in js


const myName = new String("ashish");
console.log(myName[5]);
console.log(myName.__proto__ );
console.log(myName.length);
console.log(myName.toUpperCase());// it is used to convert the string into uppercase
console.log(myName.toLowerCase());// it is used to convert the string into lowercase
console.log(myName.charAt(5));//  it is used to get the character at the specified index
console.log(myName.indexOf("i"));// it is used to get the index of the first occurrence of the specified substring
console.log(myName.substring(0,4));// it is used to extract a portion of the string between the specified indices
console.log(myName.substring(4));// it is used to extract a portion of the string starting from the specified index
console.log(myName.slice(-5,4));// it is used to extract a portion of the string between the specified indices (negative index counts from the end)
console.log(myName.replace("ashish", "ashu"));// it is used to replace a substring with another substring
console.log(myName.replace("a", "A"));
console.log(myName.includes("ash"));// it is used to check if the string contains the specified substring
console.log(myName.split(" "));// it is used to split the string into an array of substrings based on the specified separator

const myName2 = "  ashish  ";
console.log(myName2);
console.log(myName2.trim());

