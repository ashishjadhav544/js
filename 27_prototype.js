let myName = "ashish   "
let anotherName = "atharva   "

// console.log(myName.trim().length);
// console.log(myName.length);


let heroes = ["thor", "ironman", "hulk"]

let powers = {
  thor: "majonir",
  ironman: "fraday",
  hulk: "angry power",

  gethulkpower : function(){
    console.log(`hulk power is ${this.hulk}`);
  }
}


Object.prototype.ashish = function(){
  console.log("ashish is present in all objects");
}

Array.prototype.heyashish = function(){
  console.log("ashish is here");
}

powers.ashish();
heroes.ashish();
// powers.heyashish();
heroes.heyashish();







//inheritance in js
// Inheritance means one object/class can use properties and methods of another object/class.

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ashish     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"anil".trueLength()
"coldcoffee".trueLength()

