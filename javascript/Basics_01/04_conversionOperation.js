//                             CONVERSION TO NUMBER
let score= 33
let score1="33"
let score2="33abc"
let score3=null
let score4=undefined
console.log(typeof(score));
console.log(typeof(score1));
console.log(typeof(score3));
console.log(typeof(score4));
let valueInNumber= Number(score1)
let valueInNumber2= Number(score2)
let valueInNumber3= Number(score3)
let valueInNumber4= Number(score4)
console.log(typeof(valueInNumber));
console.log(typeof(valueInNumber2));
console.log(typeof(valueInNumber3));
console.log(typeof(valueInNumber4));
console.log(valueInNumber2);// answer is NaN - Not a Number , since 33abc is not a real number
console.log(valueInNumber3);// for null the output is 0
console.log(valueInNumber4);// answer is NaN , undefined
// "33"=> 33
// '"33abc" => NaN
// true => 1 ; false => 0;


//                            CONVERSION TO BOOLEAN
let isBoolean=1
let doesIsBoolean=Boolean(isBoolean)
console.log(doesIsBoolean);
let isBooleanstr=""
let doesIsBoolean2=Boolean(isBooleanstr)
console.log(doesIsBoolean2);
let isBooleanstr1="Ayush"
let doesIsBoolean3=Boolean(isBooleanstr1)
console.log(doesIsBoolean3);

// 1=> true ; 0 => false
//  "" => false
// "Ayush" => true

//                          CONVERSION TO STRING


let someNumber=33
let numberToString=String(someNumber)
console.log(typeof numberToString);
console.log(numberToString);
