const accountId = 14635
let accountEmail = "akib432@gmail.com"
var accountPswd = "1234"
accountCity = "Hyderabad"

let accountState;

//accountId = 345324 // not allowed

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

accountEmail = "akib@paypal.com"
accountPswd = "34212"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPswd, accountCity, accountState])