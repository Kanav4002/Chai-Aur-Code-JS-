// Window global object in browser

const user = {
  username: "Kanav",
  price: 999,

  welcomeMessage: function() {
    // this : current context
    console.log(`${this.username} , welcome to website.`);
    console.log(this);
    
  }
}

// user.welcomeMessage();
// user.username = "Kannan";
// user.welcomeMessage();
//console.log(this);


// function chai() {
//   // this works for object
//   let username = "Kanav";
//   console.log(this.username);
// }
// chai();


// const chai = function () {
//   let username = "Kanav";
//   console.log(this.username);
// }

// chai();

// Arrow function
const chai = () => {
  let username = "Kanav";
  console.log(this);
}

//chai();


// Basic Arrow Function
// If we use curly brackets, we need to use return keyword
// const addTwo = (num1, num2) => { 
//   return num1 + num2;
// }

// console.log(addTwo(10, 20));


// Implicit Return
// If we are not using curly brackets, we don't need to use return keyword
//const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(10, 20));


// const addTwo = (num1, num2) => ({username: "Kanav"})
// console.log(addTwo(10, 20));


// Arrow Function with array methods

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())



