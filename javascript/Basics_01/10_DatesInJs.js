/*Date
JavaScript Date objects represent a single moment in time in a platform-independent format.
Date objects encapsulate an integral number
that represents milliseconds since the midnight at the beginning of
January 1, 1970, UTC (the epoch).*/ 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); // it is an object => Interview question

let myCreatedDate = new Date(2023, 0 , 23)  // Month stats from 0 in JS
let myCreatedDate_2 = new Date(2023, 0 , 23, 5 ,3)  // Month stats from 0 in JS
let myCreatedDate_3 = new Date("2023-01-14")  // here if it month is  01 the it starts from january

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate_2.toLocaleString());
console.log(myCreatedDate_3.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);  // Gives answer in millisecound
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));





