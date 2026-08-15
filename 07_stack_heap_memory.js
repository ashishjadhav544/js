//STACK MEMORY is used to store primitive data types like numbers, strings, booleans, null, undefined, and symbols. When we assign a primitive value to a variable, it is stored in the stack memory. If we assign that variable to another variable, a copy of the value is created in the stack memory.

let myName = "virat kohli";

let anothername = myName;
anothername = "sachin tendulkar";


console.log(anothername);


//HEAP MEMORY is used to store reference(non-primitive) data types like objects, arrays, and functions. When we assign a reference value to a variable, it is stored in the heap memory. If we assign that variable to another variable, both variables point to the same reference in the heap memory.

let myPerson = {
  name : "virat kohli",
  age : 37,
  isPlayer : true
}

let anotherPerson = myPerson;
anotherPerson.name = "sachin tendulkar";

console.log(myPerson.name);
console.log(anotherPerson.name);