// singleton 
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Kanav",
  "full name": "Kanav Kumar",
  [mySym]: "mykey1",
  age: 20,
  location: "Rajpura",
  email: "kanav@google.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kanav2111.be23@chitkara.edu.in"
// Object.freeze(JsUser);
JsUser.email = "kanav2111.be23@google.edu.in"
// console.log(JsUser.email);

JsUser.greeting = function(){
  console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
