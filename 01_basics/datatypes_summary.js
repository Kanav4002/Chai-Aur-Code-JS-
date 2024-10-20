// Primitive
// Call by value
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// is JS dynamically typed or Statically typed? : Dynamically typed

const score = 100 // Number
const scoreValue = 100.3  // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // Object
let userEmail; // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol
// console.log(id === anotherId);

const bigNumber = 31919490139049013095890812309480183904n // BigInt
// console.log(bigNumber);


// Reference (Non-primitive)
// Call by reference
// 3 types : Array, Object, Function

const hero = ["Shaktiman", "Superman", "Batman"] // Array

let myObj ={
  name: "kanav",
  age: 22
} // Object

const myFunction = function()
{
  console.log("Hello World\n");
} // Function or Object
// myFunction();

console.log(typeof bigNumber);
console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); 
console.log(typeof myFunction); // object function
console.log(typeof myObj);
console.log(typeof hero); // object array