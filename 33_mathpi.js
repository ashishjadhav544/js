const hello = {
  name : "ashish",
  age : 22,
  isLoggedIn : true
}

console.log(Object.getOwnPropertyDescriptor(hello, "name"));


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);



// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);




const obj = {
  pi: 5
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "pi");

console.log(descriptor);

Object.defineProperty(obj, "pi", {
  value: 5
});

console.log(obj.pi);