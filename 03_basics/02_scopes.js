// var c = 20
let a = 200

if(true) {
  let a = 10  // block scope
  const b = 20 // block scope
  var c = 30 // global scope
  // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
  const username = "Kanav"

  function two() {
    const website = "youtube"
    console.log(username);

    // child function can access parent function variables
  }
  // console.log(website);

  // two();
}
// one();


if(true) {
  const username = "Kanav"
  if(username === "Kanav") {
    const website = " youtube"
    // console.log(username+website);
  }
  // console.log(website);
}
// console.log(username);


// Interesting Concept

console.log(addOne(10));
function addOne(num) {
  return num + 1;
}

addTwo(15);
// When we declare a function using function keyword, it is hoisted to the top of the file
const addTwo = function(num) {
  return num + 2;
}


