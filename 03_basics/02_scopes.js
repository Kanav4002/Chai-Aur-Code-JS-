// var c = 20
let a = 200

if(true) {
  let a = 10  // block scope
  const b = 20 // block scope
  var c = 30 // global scope
  console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

