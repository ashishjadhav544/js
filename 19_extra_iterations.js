//for of loop
//Used to iterate over arrays, strings, maps, and sets.

const arr = [1,2,3,4,5];

for(const num of arr){
  // console.log(`number is : ${num}`);
}

const greetings = "hello world";

for(const greet of greetings){
  // console.log(greet);
}



//for of loop in maps

const map = new Map();
map.set("In","India");
map.set("En", "England");
map.set("USA", "United States Of America");

// console.log(map);

for(const [key,value] of map){
  // console.log(key,":-",value);
}


//for of loop in object

// const obj ={
//   name : "ashish",
//   age : 22
// }

// // console.log(map1);
// for(const [key,value] of obj){
//   console.log(key,":-", value)
// }
// o/p: TypeError: obj is not iterable






//for in loop
// Used to iterate over object keys.

const obj1 = {
  js : "javascript",
  node : "node",
  react : "react"
}
 
for(const programming in obj1){
  // console.log(`${programming} shortcut is ${obj1[programming]} `);
}


//for in loop in arrays

const array = ["js","node"," react","mongodb"];

for(const language in array){
  // console.log(language)
}


//for in loop in map

const map2 = new Map();
map2.set("In","India");
map2.set("Fr","France");
map2.set("En","england");

// console.log(map2);
for(const country in map2){
  // console.log(country)
}






// forEach()

// Used with arrays.
//val or item or index or arr  should be passed in parenthesis of function and also print that val and item or index or arr

const array2 = ["js", "node", "react", "mongodb"]

// array2.forEach( function (val){
//   console.log(val);
// })

// array2.forEach((item) => {
//   console.log(item)
// })

// function program(item){
//   console.log(item);
// }
// array2.forEach(program);


// array2.forEach( function (item, index , arr){
//   console.log(item, index, arr);
// })


//array inside object so we use foreach loop

const arr_programming = [
  {
    lname  : "javascript",
    lang : 1
  },
  {
    lname  : "node",
    lang : 2
  },
  {
    lname  : "python",
    lang : 3
  }
]

arr_programming.forEach(function(item){
  // console.log(item.lname);
})


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []

myNums.forEach((num) => {
  if(num > 4){
    newNums.push(num)
  }
})
// console.log(newNums);








// filter() in JavaScript

// filter() is used when you want to select some elements from an array based on a condition.

// It returns a new array containing only the elements for which the condition is true.


const array4 = [1,2,3,4,5,6,7,8,9,10]

const num12 = array4.filter((num) => {
  return num > 4;
})
// console.log(num12);

//another way without return keyword or {} braces.
const num123 = array4.filter((num) => num > 4);
// console.log(num123);





const arr_programming1 = [
  {
    lname  : "javascript",
    lang : 1,
    published : 2005
  },
  {
    lname  : "node",
    lang : 2,
    published : 2003
  },
  {
    lname  : "python",
    lang : 3,
    published : 2000
  },
  {
    lname  : "python",
    lang : 3,
    published : 2004
  }
]

// const prog = arr_programming1.filter((val) => val.lang ===3)
//or with return keyword
const prog = arr_programming1.filter((val) =>  {return val.lang ===3})
// console.log(prog)

const prog1 = arr_programming1.filter((val) => val.lang === 3 && val.published == 2004)
// console.log(prog1);






//map
// map() is used when you want to perform an operation on every element and create a new array.


const a = [1,2,3,4,5,6,7,8,9,10];

const b = a.map((num) => num + 10);
//with return keyword and {} braces.
const c = a.map((num) => {
  return num * 10
})
// console.log(b);
// console.log(c);




//chaning
const d = a.map((num) => num *10)
           .map((num) => num + 1)
           .filter((num) => num > 30)
// console.log(d);






// reduce()

// reduce() is used when you want to combine all elements into one final value.

const mynums1 = [1,2,3];

const mytotal = mynums1.reduce(function (acc, currval) {
  return acc+currval;
},0)
// console.log(mytotal)

//with return keyword and {}.
const mytotal1 = mynums1.reduce((acc,currval) => acc+currval, 0)
// console.log(mytotal1)


const arr_programming2 = [
  {
    lname  : "javascript",
    lang : 1,
    published : 2005,
    price : 2000
  },
  {
    lname  : "node",
    lang : 2,
    published : 2003,
    price : 1000
  },
  {
    lname  : "python",
    lang : 3,
    published : 2000,
    price : 1500
  },
  {
    lname  : "python",
    lang : 3,
    published : 2004,
    price : 6700
  }
]

const r = arr_programming2.reduce((acc,currval) => acc + currval.price, 0)
console.log(r);