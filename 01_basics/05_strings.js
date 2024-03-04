const gamename= new String('anshika-hc-com')

// console.log(gamename[0]);

// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));

// console.log(gamename.indexOf('t'));
// console.log(gamename.substring(0,4));

// console.log(gamename.slice(-12, 8));
// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// // console.log(gamename.split('-'));

// const balance= new Number(100000)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966

//  console.log(otherNumber.toPrecision(4));

//  const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('en-IN'));
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// const nDate= newDate.toLocaleString('default', {
//   weekday: "long",
    
// }

// console.log(nDate());
