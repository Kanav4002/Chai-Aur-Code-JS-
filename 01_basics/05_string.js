const name = "Kanav"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Kanav-OG")
// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(typeof gameName)
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('O'))

const newString = gameName.substring(0, 4) // 4 is exclusive
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

const newStringOne = "   Kanav  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://kanav.com/kanav%20kumar"
// console.log(url.replace("%20", "-"))

// console.log(url.includes('sundar'));

console.log(gameName.split('-'))