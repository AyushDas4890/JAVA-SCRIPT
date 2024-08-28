// ############## COMPARISON OF DIFFERENT DATA TYPES ###################
console.log("2" > 1);// it gives unpredictable results
console.log("02" > 1);



console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0);// true 
// The reason is that an equality check == and comparison >,<,>=,<= wrks differently.
//Comparision converts null to a number, treating it as 0.
//That's why (3) null <= 0 is true and (1) null >0 is false


console.log(undefined > 0); // false
console.log(undefined == 0);// false
console.log(undefined >= 0);// false

// ###### STRICT CHECK "===" => checks both value and data type #######
