// Singleton

//object literals

//Object.creat

// In **interviews** it is asked to take a symbol and use it as a key in an object
// so that the key act as symbol

const mySym = Symbol("Key1");
console.log(mySym);

const JsUser = {
    name: "Ayush", // the name is preocessed as string by default => "name"
    "FullName" : "Ayush Das",
    [mySym]: "myKey1",
    age: 20,
    email: "ayush@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: ["Monday", "Saturday"]

}

// Two ways to access elements of an object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.FullName);
console.log(JsUser["FullName"]);

console.log(typeof JsUser[mySym]);

// Overridding the values of an object
JsUser.email = "das.ayush@gmail.com"
console.log(JsUser["email"]);       

//Freezing the  object 
//Object.freeze(JsUser)
//JsUser.email = "Chatgpt.com" // will not show any change in the o/p if the object is freezed


console.log(JsUser);

// ###############################     function in an object   ##########################

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting());

console.log(JsUser);  //when we print the whole object we will get 
//greeting : [Function (anonymous)] => this mean we get a function return back
//this means the function is not executed but a reference is proved to us 



// Below "this" keyword is used to reference the same object

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);




    



