// Reduce

const myNums = [1, 2, 3, 4, 5]

// acc: accumulator, curr: current value
// here after }, 0 is the initial value of acc
// const myTotal = myNums.reduce(function (acc, curr) {
//   console.log(`acc: ${acc} and curr: ${curr}`)
//   return acc + curr
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// let myTotal = 0
// myNums.forEach((num) => {
//   myTotal += num
// })

// console.log(myTotal)

// let myTotal = 0
// for (const num of myNums) {
//   myTotal += num
// }

// for (let i = 0; i < myNums.length; i++) {
//   myTotal += myNums[i]
// }


// console.log(myTotal)


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total)
