//object is a collection of key value pairs
//object literals

const symbol1 = Symbol("key1") 


const user = {
  name : "ashish",
  age : 22,
  location : "vadodara",
  [symbol1] : "mykey1",
  isLoggedIn : true,
  email : "ashish@gmail.com"
}

console.log(user.email)//old way to wright this

console.log(user["email"]);
console.log(user["location"]);
console.log(user[symbol1]);


//to change the value 
user.email = "ashishjadhav@gmail.com";
console.log(user.email);

//to freeze the object 
// Object.freeze(user);

user.email = "ashishanil@gmail.com";
console.log(user.email);

user.age = 23;
console.log(user.age);


//object in function
user.greeting = function(){
  console.log("hello user",`${this.name}`);
}
console.log(user.greeting());