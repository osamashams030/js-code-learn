// singletone 

// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akib",
    "full name": "Akib Jawed",
    [mySym]: "mykey1",
    age: 25,
    email: "akib32@gmail.com",
    location: "Hyderabad",
    isLoggedIn: false,
    lastLoggingDays: ["Monday", "Sunday"],

}
// console.log(JsUser);

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

JsUser.email = "akib32@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "akib32@yahoo.com"
console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User : ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




