class User{
  constructor(email,password){
    this.email = email,
    this.password = password
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email = value
  }

  get password(){
    return `${this._password}ashish`
  }
  set password(value){
    this._password = value
  }

}

const a = new User("ashish@gmail.com","abc");
console.log(a.email);
console.log(a.password);