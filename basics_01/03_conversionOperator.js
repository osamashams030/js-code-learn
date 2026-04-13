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

//************************Operations**************************

let value = 3
let negValue = -value
/*console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2); */

let str1 = "Akib"
let str2 = " Jawed"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log("1" + (2 + 6));
console.log(1 + 3 + "2");

console.log( (3 + 4) * 6 % 2);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 4 + 4

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);







