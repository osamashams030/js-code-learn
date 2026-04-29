// Array
const myArray = [0, 1, 2, 3, 4]
const myHeros = ["Sharukh", "Salman"]

const newArray1 = new Array(0, 1, 2, 3, 4)
console.log(myArray[0]);
console.log(newArray1);

//Array methods
myArray.push(5)
myArray.push(6)
myArray.push(8)
myArray.pop()
//myArray.unshift(9)
myArray.shift()
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArray2 = myArray.join()
console.log(myArray);
console.log(typeof myArray);

console.log(newArray2);
console.log(typeof newArray2);

// slice and splice method

console.log("A ", myArray);
const myn1 = myArray.slice(1, 4)
console.log(myn1);

console.log("B ", myArray);
const myn2 = myArray.splice(1, 4)
console.log("C ", myArray);
console.log(myn2);








