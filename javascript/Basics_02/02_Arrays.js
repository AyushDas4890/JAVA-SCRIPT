const marvel_heros = ["Thor" , "IronMan" , "Spiderman" ]
const dc_heros = ["Superman" , "Flash" ,  "Batman"]


// ##########################################   PUSH ###################################

//  =>Push takes the entire new array as a data in the older array

/*marvel_heros.push(dc_heros) 
console.log(marvel_heros); // Expected output : [ 'Thor', 'IronMan', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

console.log(marvel_heros[3][1]);  //Expected output : Flash
*/



//######################################    CONCAT #################################
// => returns new array joining the two array into one array


/*let newHeros= marvel_heros.concat(dc_heros) 
console.log(newHeros);  // Expected output : [ 'Thor', 'IronMan', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
*/

// ###############################  Spread Method ########################################
//=> Mostly used
// => Also joins two array into one

const all_Heros = [...marvel_heros, ...dc_heros] //  Expected output : [ 'Thor', 'IronMan', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
console.log((all_Heros));


// ########################################## Flat mathod    #############################

/* The flat() method of Array instances creates a new array with all sub-array
 elements concatenated into it recursively up to the specified depth.
 */

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)// here infinity is the dept 
console.log(real_another_array);

console.log(Array.isArray("IronMan")); // check if the given value is an array
console.log(Array.from("SuperMan")); // convert the value into an array
/* Expected output :[
    'S', 'u', 'p',
    'e', 'r', 'M',
    'a', 'n'
  ]
    */

console.log(Array.from({name: "BatMan"})); //interesting for interviews

let score1= 100
let score2= 200
let score3= 300


console.log(Array.of(score1,score2,score3)); // ************* */
 

