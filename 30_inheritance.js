class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hello = new Teacher("ashish", "ashish@teacher.com", "123")

hello.logMe()
const hello1 = new User("hello1")

hello1.logMe()

console.log(hello instanceof User);