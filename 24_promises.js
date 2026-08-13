const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
      console.log("async  task is completed");
      resolve();
    },2000)
})

promiseOne.then(function(){
  console.log("promised consumed")
})



//other way for promise
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("async 2 task is completed");
    resolve();
  },4000)
}).then(function(){
  console.log("promised 2 is completed")
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({username: "ashish", age : 22});
    },6000)
})

promiseThree.then(function(user){
  console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
      if(!error){
        resolve({username1 : "ashish jadhav", gender : "male"})
      }else{
        reject('error:something went wrong')
      }

  },8000)
})

promiseFour.then(function(user){
  console.log(user);
  return user.username1;
}).then(function(username1){
  console.log(username1)
}).catch(function(error){
  console.log(error)
}).finally(function(){
  console.log("completed");
})




const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({isloggedIn : true, name : "anil"});
    }else{
      reject("error: wrong");
    }
  },10000)
})

async function promiseFiveF(){
  try{
  const response = await promiseFive
  console.log(response);
  }catch{
    console.log("error");
  }
}

promiseFiveF();




// async function one() {
//   try{
//   const response = await fetch('https://api.github.com/users/ashishjadhav544');
//     const data =  await response.json();
//     console.log(data);
//   }catch{
//     console.log("error coming bro")
//   }
// }

// one();





fetch('https://api.github.com/users/ashishjadhav544')
.then((response) => {
  return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) =>
  console.log("error is coming"));

  





