// call:- call() allows you to call a function and explicitly tell JavaScript what this should refer to.

function setUserName(username){
  this.username = username;
  console.log("username called")
}

function userName(username, email , age){
  setUserName.call(this, username);
  this.email = email;
  this.age = age;
}

const a = new userName("ashish","ashish@gmail.com",22);
console.log(a);
