const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["batman", "superman", "wonderwoman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// // concat : returns a new array
const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray('Kanav'));
// console.log(Array.from('Kanav'));
// console.log(Array.from({name: "Kanav"})); // interesting


// Array.of : creates a new Array instance from a variable number of arguments.
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));



