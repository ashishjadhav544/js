// const b = 25;
// var c =35;

// if(true){
// let a =10;
// const b =20;
// var c =30;
// console.log("Local Scope",a);
// }

// // console.log(a);
// console.log("global Scope",b);
// console.log(c);




//nested function or local or global scope using function

// function one(){
//   const username = "ashish";

//   function two(){
//     const age = 22;
//     console.log(username);
//     console.log(age);
//   }
//   two()
//   console.log(username);
// }
// one()

//local or global scope using if condition


// if(true){
//   const username = "ashish"
//   if(username === "ashish"){
//     const age = 22;
//     const join = username + age 
//     console.log(join);
//     console.log(age);
//     console.log(username);
//   }
//   console.log(username);
// }


//function can be declare before but function cannot be declare before varible is declared


console.log(one(2));

function one(num){
  return num + 1;
}
//output --3




console.log(two(2));

const two = function(num){
  return num + 1;
}

// console.log(two(2));
//             ^

// ReferenceError: Cannot access 'two' before initialization