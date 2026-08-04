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







//part2

// const youtubeuser = new Object()
const youtubeuser = {}

youtubeuser.id = 1
youtubeuser.name = "ashish"
youtubeuser.isLoggedIn = true

console.log(youtubeuser);




const name = {
  email : "ashish@gmail.com",
  fullname :{
    username :{
      firstname : "ashish",
      middlename : "anil",
      lastname : "jadhav"
    }
  }
}

console.log(name.email)
console.log(name.fullname.username.middlename)//like flating the objects




const obj1 = {1: "a",2: "b"};
const obj2 = {3: "c",4: "d"};

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)//like conacatinating object
console.log(obj3)

const obj4 = {...obj1, ...obj2}//like spread the object
console.log(obj4)



console.log(youtubeuser);
console.log(Object.keys(youtubeuser));
console.log(Object.values(youtubeuser));
console.log(Object.entries(youtubeuser));

console.log(youtubeuser.hasOwnProperty('isLoggedIn'));