const user = {
    username: "Ayush" , 
    price: 999 , 

    welcomeMessage: function() {
        console.log(this); // it prints the current context of the object
        console.log(`${this.username} , welcome to website`); // this refferes to the current context here
    }

}

user.welcomeMessage()  // o/p : Ayush , welcome to the website

user.username = "Sam" // we change the current context

user.welcomeMessage() // o/p : Sam , welcome to the website

console.log(this); // o/p : {} => Empty 



function chai(){
    let username = "hitesh"
   // console.log(this.username); => o/p : UNDEFINED , since we can use this only in case of objects and not functions
}

chai()



const chai2 = function (){
    let username = "Ayush"
    //console.log(this.username); => o/p : o/p : UNDEFINED , since we can use this only in case of objects and not functions

}
chai2()


// ++++++++++++++++++++++++++++++++++++++++     ARROW FUNCTION     ++++++++++++++++++++++++



const chai3 = () => {   // THIS IS CALLED ARROW FUNCTION
    let username = "Ayush"
    //console. log(this.username);// => o/p : o/p : UNDEFINED , since we can use this only in case of objects and not functions
   // console.log(this);// => o/p : {}


}
chai3()


//   ##############   Holding arrow function inside a variable ##########


const addTwo = ( num1 , num2) => { // Explicit return => when we have to use return explicitly
    return num1 + num2
}

console.log(addTwo(3,4));


//   ###########  Method of implicit return  in arrow function #########

const addThree = ( num1 , num2 , num3) => (num1 + num2 + num3)
console.log(addThree(3,4,2));


// we can say when we use curly braces " {}"  in a arrow function we have to use return statement 
// but when we use () , return statement is not required


// when we return an object in arrow function we have to use curly braces "{}"
console.log(addobj(3,4));
const addobj = (num1 ,  num2) => ({username: "Ayush"})