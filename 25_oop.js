const user = {
  name : "ashish",
  age : 22,
  isloggedIn : true,

  getUserDetails :  function(){
    // console.log("hello ashish");
    // console.log(`${this.name} and ${this.age}`)
    console.log(this);
  }
};

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);




function username(name, age, isloggedIn){
  this.name = name;
  this.age = age;
  this.isloggedIn = isloggedIn;

  this.gretting =  function(){
    console.log(`welcome ${this.username}`)
  }
}

const one =  new username("ashish",22,true);
const two = new  username("anil",51,true)
console.log(one);
console.log(two);
