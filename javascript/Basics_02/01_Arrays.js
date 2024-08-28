// ************************************************** ARRAYS *********************************************


/* The Array object, as with arrays in other programming languages,
 enables storing a collection of multiple items under a single variable name,
and has members for performing common array operations.

**JavaScript arrays are resizable** and can contain a mix of different data types.
(When those characteristics are undesirable, use typed arrays instead.)
*/

const myArr = [0, 1, 2, 3, 4]

console.log(myArr[0]);

/* JavaScript array-copy operations create shallow copies. 
(All standard built-in copy operations with any 
/* ########################################### Shallow Copy ###############################################

 A shallow copy of an object is a copy whose properties share the same references 
 (point to the same underlying values) as those of the source object from which the copy was made.
  As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

More formally, two objects o1 and o2 are shallow copies if:

They are not the same object (o1 !== o2).
The properties of o1 and o2 have the same names in the same order.
The values of their properties are equal.
Their prototype chains are equal.*/

/* ############################################ Deep Copy #########################################################

A deep copy of an object is a copy whose properties do not share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too*/

const myHeros = ["Ironman" , "Thor"]

const myArr2 = new Array(1,2,3,4)

console.log(typeof myHeros);
console.log(myArr2);


// ##################################### Array Methods ###############################################

myArr2.push("Ayush") // Adds an elements  at the end of the array

myArr2.pop()  // Removes last element of the array

myArr2.unshift(9) // Add an element at the stating of an array
myArr2.shift()    // Removes an element from the starting of an array



console.log(myArr2.includes(9));
console.log(myArr2.indexOf(9)); // will return -1 , since 9 is not present
console.log(myArr2.indexOf(3));

// ##################################   join()   #################################
/* The join() method of Array instances creates and returns a new string by concatenating
 all of the elements in this array, separated by commas or a specified separator string.
If the array has only one item, then that item will be returned without using the 
separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
*/

const newArr = myArr2.join() // converts the array into a string
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);

// **************************  Splice & Slice *************** (Interview Questions)

// Slice operation  => Does not manipulate the orriginal array

/* The splice() method of Array instances changes the contents of an array 
by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the 
original array, use toSpliced(). To access part of an array without modifying it, 
see slice().

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

*/
console.log("A ",myArr2);

const myn1 = myArr2.slice(0,3)

console.log(myn1);
console.log("B ",myArr2);

//Splice operation => Manipulates the original array
console.log("c ",myArr2);

const myn2 = myArr2.splice(0,3)

console.log(myn2);

console.log("d ",myArr2);

