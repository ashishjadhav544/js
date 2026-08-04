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