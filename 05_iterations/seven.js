const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => { return num + 10 })
// const newNums = myNumbers.forEach((num) => num + 10)
// const newNums = myNumbers.filter((num) => num + 10)
// for (const num of myNumbers) {
//   console.log(num + 10);
// }
// myNumbers.forEach((num) => {
//   console.log(num + 10);
// })
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(newNums)




