let score = "33abc";

console.log(typeof score); 
console.log(typeof(score));


console.log(typeof(Number(score)));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//outputs
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//"" => 0
//"ashish" => NaN


let isloggedIn = "ashish";
let isloggedInAsNumber = Boolean(isloggedIn);
console.log(typeof isloggedInAsNumber);
console.log(isloggedInAsNumber);
//"" =>false
//"ashish" => true

let someNumber = 33;
let someNumberAsString = String(someNumber);
console.log(typeof someNumberAsString);
console.log(someNumberAsString);