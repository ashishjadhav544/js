//function is a block of code that can be called and executed when needed

// function myname(){
//   console.log("a");
//   console.log("s");
//   console.log("h");
//   console.log("i");
//   console.log("s");
//   console.log("h")
// }

// myname()


// function addtwonummber(num1, num2){
//   console.log(num1 + num2);
// }

// addtwonummber(1,2);


// function addtwonumber(num1, num2){
//   let result = num1 + num2
//   return result;
// }
// let result = addtwonumber(1,3);
// console.log(result);



// function newuser(username){
//   console.log(`${username} just logged in`);
// }
// newuser("ashish");



// function newuser1(username){
//   if(username === undefined){
//     console.log("please enter a name")
//     return
//   }
//   return `${username} just logged in`
// }
// console.log(newuser1());


// function newuser1(username = "ashish"){
//   // if(username === undefined){
//   if(!username){
//     console.log("please enter a name")
//     return
//   }
//   return `${username} just logged in`
// }
// console.log(newuser1("anil"));//overrides




//part 2

// //rest operator
// function calculator(...num1){
//   return num1;
// }
// console.log(calculator(1,200,500,56,6776));


// function calculator1(val1, val2, ...num1){
//   return num1;
// }
// console.log(calculator1(1,2,3,4,5));


//function with objects
//1
// const user ={
//   name : "ashish",
//   age : 22
// }


// function username3(anyuser){
//   console.log(`my  name is ${anyuser.name} and my age is ${anyuser.age}`);
// }
// username3(user);

// function username4(anyuser){
//   console.log(`my name is ${anyuser.name} and my email is ${anyuser.email}`);
// }

// username4({
//   name : "ashish",
//   email : "ashish@gmial.com"
// })




//function with arrays
// const array = [100,200,300,400]

// function array1(arr){
//   console.log(`my array is ${arr}`);
// }
// array1(array);


//without console.log while using return

// const array = [100,200,300,400]

// function array1(arr){
//   return arr[3];
// }
// console.log(array1(array));



// function array1(arr){
//   return arr[2];
// }
// console.log(array1([100,200,300]));