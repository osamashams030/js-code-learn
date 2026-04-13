let score = "35abs"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "35" => 33
// "35abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(isLoggedIn);

// 1 => true; 0 => false
// "" => false; "Akib" => true

let someNumber = 56
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


