// // const greetings = 'Hello world!'
// // for (const greet of greetings) {
// //     console.log(`${greet}`)
// // }

// // // const map = new Map()
// // // map.set('IN', "India")
// // // map.set('USA', "United States of America")
// // // map.set('Fr', "France")
// // // map.set('IN', "India")


// // // console.log(map);
// // // for (const [key,value] of map) {
// // //     console.log(key, ':-', value);
// // // }


// // const myObject = {
// //     js: 'javascript',
// //     cpp: 'C++',
// //     rb: "ruby",
// //     swift: "swift by apple"
// // }

// // for (const key in myObject) {
// //     console.log(key);
// //     //  shortcut is for ${myObject[key]}`);
// // }


// // const programming = ["js", "rb", "py", "java", "cpp"]

// // for (const key in programming) {
// //     console.log(key);
// // }


// // const map = new Map()
// // map.set('IN', "India")
// // map.set('USA', "United States of America")
// // map.set('Fr', "France")
// // map.set('IN', "India")

// // for (const [key,value] in map) {
// //     console.log(key);
// // }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);


// // for (const key of map) {
// //      console.log(key);
// // }

// // ===========================
// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
//  } )

// // coding.forEach( (item) => {
// //     console.log(item);
// // } )

// // function printMe(item){
// //     console.log(item);
// // }

// // coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // let newNums = myNums.filter( (num) => {
// //     return num > 4
// // } )

// let newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

 const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

