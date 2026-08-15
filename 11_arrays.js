// //array is a collection of similar or different data types 
const arr = [1,2,3,4,5];
console.log(arr[0]);

const arr1 = ["ashish","anil", "sangita", "isha"]
console.log(arr1);

const arr2 = [1,"ashish", 2, true, 3, null]
console.log(arr2);


//new way to wright array
let array1 = new Array(1,2,3,4,"ashish",null,true,"anil");
console.log(array1);

//array methods

let array2 = new Array(1,2,3,4,5);

array2.push(6);//push is when we need to add an element at the end of an array
console.log(array2)

array2.pop();//pop is when we need to remove an element at the end of an array
console.log(array2);

array2.shift();//shift is when we need to remove an element at the start of an array
console.log(array2);

array2.unshift(1);//unshift is when we need to add element at the start of an array
console.log(array2);

console.log(array2.includes(7));//include the element in array or not
console.log(array2.indexOf(3));//find the element by indexing 

const newArr = array2.join();

console.log(array2)
console.log(newArr);
console.log(typeof newArr);



const newArr1 = [1,2,3,4,5,6];

console.log(newArr1.slice(1,4));//slice = copy ✂️ (original stays the same)
console.log(newArr1.splice(1,4));//splice = change 🔧 (original array is modified)




//part2 



const marvel_heros = ["captain", "iron-man", "thor"]
const dc_heros = ["flash","superman","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const heros = marvel_heros.concat(dc_heros);//concat is used to merge 2 arrays
console.log(heros);

const new_heros = [...marvel_heros, ...dc_heros];//spread is also used to merge 2 arrays but using ...
console.log(new_heros);



const another_array = [1,2,3,[4,5,],6,7,[3,5,[1,2]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


//isArray, from , of 
console.log(Array.isArray("ashish"));//isArray - Checks whether a value is an array.
console.log(Array.from("ashish"));//from - Creates a new array from: String Array-like object Iterable object
console.log(Array.from({name: "ashish"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

const new_score = Array.of(score1,score2,score3);//of - Creates an array from the values you pass.
console.log(new_score);

