const name = "Akib Jawed"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Akib Samrath');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-11, 2)
console.log(anotherString);

const newStringOne = "     Akib     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akib.com/akib%30javed"
console.log(url.replace("%30", "-"));
console.log(url.includes('akib'));
console.log(url.includes('sakib'));

console.log(gameName.split('-'));






