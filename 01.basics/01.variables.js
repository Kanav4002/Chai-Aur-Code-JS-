const accountId = 2111
let accountEmail = 'kumarkanav5753@gmail.com'
var accountPassword = 'password123'
acccountCiy = 'Bangalore' // worst practice
let accountState;

// accountId = 2112 // not allowed

accountEmail = "hc@hc.com"
accountPassword = 'password1234'
acccountCiy = 'Mumbai'

/*
Prefer not to use var keyword
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, acccountCiy, accountState])