// ###############################    Immediately Invoked Function Expressions (IIFE) ###################


/* 
1. Encapsulation and Scope Isolation:

An IIFE allows you to create a private scope for your code.
Everything inside the function is encapsulated within that scope,
preventing variables and functions from leaking into the global scope.
By wrapping your code in an IIFE, you ensure that any variables or functions defined within it won’t interfere
with other parts of your application. This helps avoid naming collisions and unintended side effects.


2.Avoiding Global Pollution:

When you declare variables or functions globally (i.e., in the global scope), 
they become accessible from anywhere in your code. However, this can lead to cluttered global namespaces
and potential conflicts.
IIFE allows you to define variables and functions within a local scope,
 keeping them private and preventing them from polluting the global scope.*/
    


  
 (function chai(){

    console.log(`DB CONNECTED`);

 })() ; // => 1st () is for function defination &  2nd () is for calling the function directly

 // => always use ; after () in IIFE


 ( (name) => { // IFFE
   console.log(`DB CONNECTED TO ${name}`);
 } ) ('Ayush');
  

 
 