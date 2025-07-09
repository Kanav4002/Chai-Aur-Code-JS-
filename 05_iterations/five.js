const coding = ["js", "ruby", "java", "python", "cpp"];

// Since its a callback function, it doesn't have a name
// coding.forEach( function (item) {
//   console.log(item);
// })

// Arrow function
// coding.forEach( (item) => {
//   console.log(item);
// })

// function printMe(item) {
//   console.log(item);
// }
// 
// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})

