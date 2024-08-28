
function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

sayMyName() // sayMyName => is the reference of the function , but when we add () it executes the function

function addTwoNumbers(number1, number2){// when we define a function , the part inside the parentesis is called parameters 
    console.log(number1 + number2)
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,7)

console.log(`Result1 : ${result}`); // will give the output : Result : undefined


function addTwoNumbersb(number1, number2){// when we define a function , the part inside the parentesis is called parameters 
    return (number1 + number2)
   
}
const result2 = addTwoNumbersb(3,7)
console.log(`Result2: ${result2}`);

// in a function any code which has been written after return statement will not be executed

function loginUserMessage(username){ // if we want to insert a default value we will write username = "sam"
    if (username === undefined){ // or if(!username)
        console.log("please enter a username");
        return // will not proceed further if undefined
    }
    return `${username} just logged in `

}

console.log(loginUserMessage()); // since no value is passed the output : undefined just logged in
console.log(loginUserMessage("Ayush"));

// ###########  Functions where we dont know how many parameters to be added ##################

/*function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))   // here only the 1st argument is taken as there is only 1 parameter in the function defintion
*/


// For unknow number of arguments we use "Rest Operator (...)"
// => it will taka all the items in an array


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))  


// #########################################################################################################

function calculateCartPrice2(val1,val2,...num1){
    return num1
}
// val1=> 200 , val2 => 400
console.log(calculateCartPrice2(200,400,500,2000,5000)) 




// ################# Passing object in a function #############################


const user ={
    username: "Ayush",
    price: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


handelObject(user) // will call the function with object a 


// passing object directly into a function

handelObject({
    username: "Das",
    price: 299
})


// #################### Passing array in a function #############################


const myNewArray = [200 , 400 , 500]

function returnArray(getArray){
    return getArray[1];
}

console.log(returnArray(myNewArray));

// Directly passing an array in a function

console.log((returnArray([100,3000, 4000])));