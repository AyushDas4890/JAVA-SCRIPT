// #DataTypes are divides based onhow they are stored and how they are accessed 
// We have two types of DataTypes=> 1.Primitive & 2.Non Primitive/Reference Type


//###################################  PRIMITIVE DATATYPE #################################
// THEY ARE GENERALLY CALL BY VALUE 
// => 7TYPES : STRING , BOOLEAN , NUMBER , NULL , UNDEFINED , SYMBOL , BIGNUMBER




//JavaScript is a dynamically typed language.
// This means that variable types are determined at runtime and can change as the program executes. 
//You don’t need to specify the type of a variable when you declare it, and the same variable can hold values of different types at different times.

//##################################   Table on difference between Dynamically typed and Statically Typed Language #######################

//Aspect	                  "Dynamically Typed Languages"               	"Statically Typed Languages"

//Type Checking	                    At runtime.	                       At compile time.
//Variable Declaration	   No need to specify data type.	           Must specify data type.
//Flexibility	           More flexible with variable types.	       Less flexible; types are fixed.
//Performance	           Can be slower due to runtime checks.	       Generally faster due to compile-time optimization.
//Error Detection	       Errors are found during execution.	       Errors are found before execution, during compilation.
//Examples	               Python, Ruby, JavaScript.	               C, C++, Java, Swift.





//######  SYMBOLS ######
// => Gives a unique value
let id=Symbol("123")
let newId= Symbol("123")
console.log( id === newId); // => false







// ################################## NON PRIMITIVE (REFERENCE) DATATYPE ################
// =>                            ARRAY , OBJECTS , FUNCTIONS

// ##   1.ARRAYS
let heros = ["IronMan", "Thor" , "SpiderMan"];
console.log(heros);

//##   2.Objects
// => Anything between " {} ""
let myObj = {
    name: "Ayush",
    age:   20,
    }


//##   3.Functions

//We can store a function inside a variable

let myFunc= function(){
    console.log("Hello World");
}

console.log(myFunc());





// ########################################  LETS TALK MORE  ABOUT DATATYPES ########################

/*
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory. 
        */