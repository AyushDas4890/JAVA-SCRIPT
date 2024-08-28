//####################################   Stack & Heap Memory   ############################


//     Stack Memory =>for  Primitive DataTypes => When we define a stack memory we get a copy of the variable


let myValoName ="Destroyer"

let anotherName = myValoName
anotherName = "Ayush"

console.log(myValoName);
console.log(anotherName);
//Value of the anotherName changes since a copy of myValoName was given to the variable anotherName





//      Heap Memory   =>for Rference Datatypes   => When we define a heap memory we get a reference of the variable


let userOne = {
    email : "user@gmail.com",
    upi :   "user@sbi",
}


let userTwo = userOne

userTwo.email= "Ayush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Both will print "Ayush@gmail.com" since both variables are refereing to same memory location
