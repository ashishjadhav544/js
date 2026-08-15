const User = {
  _email : "a@gmial.com",
  _password : "abc",

  get email(){
    return this._email.toUpperCase();
  },

  set email(value){
    this._email = value
  }

}

const a = Object.create(User);
console.log(a.email);