//date is object in js 

let myDate = new Date();

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let anotherDate = new Date(2026, 0, 1, 5, 0);
console.log(anotherDate.toLocaleString());
let thirdDate = new Date("01-02-2025");
// console.log(thirdDate.toLocaleDateString());
console.log(thirdDate.getTime());
let fourthDate = new Date("2026-04-01");
console.log(fourthDate.toLocaleDateString());


//timestamp
let timeStamp = Date.now();

console.log(timeStamp);
console.log(Math.floor(Date.now()/1000));

let nextDate = new Date();

console.log(nextDate.getDate());
console.log(nextDate.getDay());
console.log(nextDate.getFullYear());
console.log(nextDate.getHours());


nextDate.toLocaleDateString(`default`,  {
  weekday: "long",
})