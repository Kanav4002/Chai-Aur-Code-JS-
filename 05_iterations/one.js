// for loop

// for (let index = 0; index <= 10; index++) {
//   const element = index; 
//   if (element == 5) {
//     console.log('5 is my favorite number');
//   }
//   console.log(element);
// }
// console.log(element);

// for (let i = 1; i <= 20; i++) {
//   console.log(" ");
//   console.log(`Multiplication table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let myArray = ['apple', 'banana', 'grapes', 'orange', 'mango', 'pineapple'];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);  
// } 


// break and continue

// break stops the loop
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log('5 is my favorite number'); 
//     break;
//   }
//   console.log(index);  
// }


// continue skips the current iteration and moves to the next iteration  
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log('5 is my favorite number'); 
    continue;
  }
  console.log(index);  
}