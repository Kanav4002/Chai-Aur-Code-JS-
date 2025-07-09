// Function Definition
function sayMyName(){
  console.log("K");
  console.log("A");
  console.log("N");
  console.log("A");
  console.log("V");
}

// Function Expression
// Types of ways to define a function

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// reference is sayMyname, () is execution
// sayMyName(); 


// function addTwoNumbers(number1, number2){ // parameters

//   console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2){ // parameters
  // let result = number1 + number2;
  // return result;  
  return number1 + number2;
}

const result = addTwoNumbers(3, 5); // arguments
// console.log("Result: ", result);


function loginUserMessage(username = "kanav"){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Kanav2111"));
// console.log(loginUserMessage("kannan")); // undefined when no value is passed as argument


// rest operator and spread operator
function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

// Passing object through functions
const user = {
  username: "Kanav",
  price: 200
}

function handleObject(anyobject) {
  console.log(`Username is : ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  username: "Sam",
  price: 399
});


// Passing array through functions

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


