const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

// Spread Operator by using 3 dots
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, [6, 7, 8]], 7, 8, [4, 5]]
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);


console.log(Array.isArray("Akib Jawed"))
console.log(Array.from("Akib"))
console.log(Array.from({name: "Akib Jawed"})) // important

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1, score2, score3, score4));

