// ########################## OPERATIONS IN JS ##################################


let value= 3
let negValue=-value
console.log(negValue)
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);
console.log(2%3);
let str1="Hello"
let str2=" Ayush"
let str3=str1 + str2
console.log(str3);


//**************************Some messy operations which are not prefered***********
console.log("1"+2);  // o/p  => 12
console.log(1+'2');  // o/p  => 12
console.log("1"+2+2); // o/p => 122
console.log(1+2+"3"); // o/p => 33

console.log(3+4*5%3); // a messy operation which is not prefered

console.log(+true); // o/p => 1
console.log(+""); //  o/p => 0


// ################# PREFIX AND POSTFIX ###################
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"