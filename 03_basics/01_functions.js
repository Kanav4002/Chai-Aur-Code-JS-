// Function Definition
function sayMyName(){
  console.log("K");
  console.log("A");
  console.log("N");
  console.log("A");
  console.log("V");
}

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
console.log(loginUserMessage("kannan")); // undefined when no value is passed as argument