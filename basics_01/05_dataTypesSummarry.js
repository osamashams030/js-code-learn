// Primitive data types

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//const bigNumber = 234568676463637n


// Reference Type (Non-Primitive data types)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Akib",
    age: 27,
}

const myFunction = function() {
    console.log("Hello Word");
    
}

console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function
console.log(typeof heros); // object

//==================Memory=======================
// Stack(Primitive), Heap(Non-Primitive)

let myEmail = "akib453.com";
let anotherName = myEmail;
anotherName = "Samrath Saree"

console.log(anotherName);
console.log(myEmail);

let userOne = {

    email : "samrathsaree@gmail.com",
    upi : "user@ybl"

}

let userTwo = userOne

userTwo.email = "akibjawed@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


