//this keyword refeered to current context
//this is a keyword that refers to the object that is currently calling the function.

const user = {
  name : "ashish",
  age : 22,
  welcomeMessage : function(){
    console.log(`hello ${this.name}`);
    console.log(`my age is ${this.age}`)
    console.log(this)
  }
}
user.welcomeMessage();
user.name = "anil";
user.age = 51
user.welcomeMessage();



const one = function(){
  const username = "ashish"
  console.log(this.username);
}
one();



//arrow function 
// Arrow functions are a shorter way to write functions.

const two = () => {
  const username = "ashish"
  console.log(this.username);
}
console.log(two());



const three = (num1,num2) => {
  return num1 + num2;
}
console.log(three(5,2));


//another way to wright arrow function 
const four = (num1,num2) => num1 + num2;

console.log(three(5,2));

//or
const five = (num1,num2) => ( num1 + num2 );

console.log(three(5,2));
