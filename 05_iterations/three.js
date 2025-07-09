// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps
// have only unique values
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

// destructuring of array
for (const [key, value] of map) {
  // console.log(key, '->', value);
}
// console.log(map);

const myObject = {
  'game1' : 'Mario Super',
  'game2' : 'Mario Kart',
  'game3' : 'Mario Party'
}

for (const [key, value] of myObject) {
  console.log(key, '->', value);
}