// Immediately Invoked Function Expression
// It is a function that runs immediately after it is defined.

// function one(){
//   console.log("DB Connected");
// }
// one();

//iife
(function one(){
  console.log("DB Connected");
})();

( (one) = () => {
  console.log("DB Connected");
})();



