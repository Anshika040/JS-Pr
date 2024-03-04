// const myar=[0,1,2,3,4]
// const myheros=["batman", "superman"]

// const myar2= new Array(1,2,3,4)
// // console.log(myar);
// // console.log(myheros);
// // console.log(myar2[2]);

// myar2.push(6)
// myar2.push(7)

// // console.log(myar2);

// myar2.pop()
// // console.log(myar2);

// myar.unshift(9)
// myar.shift()
// // console.log(myar);


// console.log(myar.includes(9));
// console.log(myar.indexOf(3));
// const newArr = myar.join()

// console.log(myar);
// console.log( newArr); //string

// console.log("A ", myar);

// const myn1 = myar.slice(1, 3)

// console.log(myn1);
// console.log("B ", myar);


// const myn2 = myar.splice(1, 3)
// console.log("C ", myar);
// console.log(myn2);
// console.log(myar);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))


console.log(Array.from({name: "hitesh"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));