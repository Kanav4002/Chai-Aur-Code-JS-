// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log('DB Connected');
})();


// global scope ke pollution se bachne ke liye IIFE ka use hota hai
// what is pollution? : pollution is when we have a lot of variables in the global scope
( (name) => {
  console.log(`DB Connected two, ${name}`);
})("Kanav")
// function definition then function call


