//const tinderUser = new Object()  this is a way of declaring objects => Singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ayush",
            lastname: "Das"
        }
    }

// 
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);


// Merging or combining objects

 const obj1 = {1:"a" , 2: "b"}
 const obj2 = {3:"a" , 4: "b"}

 
 //const obj3 = { obj1, obj2} //  It will create a new object and will show 2 obj inside the new object
 
 
 
 
 
 //#############################   Object.assign()   ########################################
 
 //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
 // It returns the modified target object.
 
 const obj3 = Object.assign( obj1, obj2) // is we add  "{}" at first  => it is the target array & obj1 and obj2 is the source
 console.log(obj1);
 
 console.log(obj3 === obj1);// => True
 
 
 //###########################   SPREAD METHOD ############################
 
 // => General way of combining two object

 const obj5 = {1:"a" , 2: "b"}
 const obj6 = {3:"a" , 4: "b"}

 const obj7 = {...obj5,...obj6}
 console.log(obj7);

 // ############################ Array of Objects #############################

 const user = [
    {
        id: 1,
        email : "A@gmail.com"
    },
    {
        id: 2,
        email : "B@gmail.com"
    },
    {
        id: 3,
        email : "C@gmail.com"
    }
]

console.log(user[0].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser));// Returns all the keys of an object inside an => "Array"

console.log(Object.values(tinderUser));// Returns all the values of an object inside an => "Array"

console.log(Object.entries(tinderUser));// Returns as key,values pair in keys  inside an => "Array"

//   ###  obj.hasOwnProperty => Determines whether an object has a property with the specified name. ####
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // => True



//########################### Lecture 03 Objects ##############################



//############################  DESTRUCTURING OF OBJECTS #####################


// => Another way of printing objects in JS or any other kind of programmimg language
// where we need to use the elements of object multiple times, so we can use destruction of objects ,
//where we can jnjrjj   
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course // or const {courseInstructor: instructor} = course
console.log(courseInstructor); //    or console.log(instructor); if the above method is followed


// ######################    JASON   ##################
// => we can say object without any name can be said as a JASON

/* {
        "name": "Ayush",
        "coursename": "js in hindi",
        "price": "free"
}

*/

[
        {},
        {},
        {}


]
