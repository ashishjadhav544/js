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





let number = 100;

let stringNumber = String(number);

console.log(stringNumber);
console.log(typeof stringNumber);


let str1 = "ashish"
let str2 = "jadhav"

let str3 = str1+str2;

console.log(str3);

console.log("1" + 2);

console.log(1 + "2");

console.log("1" + 2 + 2);

console.log(1 + 2 + "2");



//prefix and postfix increment and decrement operators

let num = 5;

console.log(num++);
console.log(num);


let x = 5;

console.log(++x);
console.log(x);



