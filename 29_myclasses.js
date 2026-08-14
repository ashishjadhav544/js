//ES6


// class User{
//   constructor(username,email,password){
//     this.username = username,
//     this.email = email,
//     this.password = password
//   }
//   encryptPassword(){
//   return `${this.password}abc`
//   }

//   changeusername(){
//   return `${this.username.toUpperCase()}`
//   }
// }

// const a = new User("ashish", "ashish@gmail.com",1234);

// console.log(a.encryptPassword());
// console.log(a.changeusername());


//another way to wright this :- behind the scene


function User(username,email,password){
  this.username = username,
  this.email = email,
  this.password = password

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUserName = function(){
  return `${this.username.toUpperCase()}`
}
}

const b = new User("ashish","a@gmail.com",87)

console.log(b.encryptPassword());
console.log(b.changeUserName());






