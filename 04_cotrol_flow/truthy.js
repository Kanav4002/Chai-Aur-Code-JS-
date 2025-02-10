// const userEmail = []
// if (userEmail) {
//     console.log("Email is present")
// } else {
//     console.log("Email is not present")
// }

// falsy values

// false, 0, -0, BigInt(0), "", [], {}, null, undefined, NaN

// truthy values

// true, "0", "false", " ", [ ], { }, function() { }

// if(userEmail.length === 0) {
//     console.log("Email is not present")
// }

// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty")
// }


// Nullish Coalescing Operator (??): null undefined
// Basically when and if erros happen in the code, we can use this operator to handle the errors
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
// console.log(val1);


// Terinary Operator
// condition ? true : false

let age = 18
let isAdult = age >= 18 ? console.log("Adult") : console.log("Not Adult")