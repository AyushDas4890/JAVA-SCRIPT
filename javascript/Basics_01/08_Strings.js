// ####################################   STRINGS ########################################


let name = "Ayush"
let myRepoCount = 3


// String interpolation
console.log(`Hello my name is ${name} and my repo count id ${myRepoCount} , nice to meet you!`);


const gameName = new String('Valorant')   // It is another way of defining a string

console.log(name[0]);
console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('l'));

console.log(gameName.substring(0,2));

console.log(gameName.substring(-2,2));
console.log(gameName.slice(-8,8));

let newName = "    Ayush    Das  "

console.log(newName);
console.log(newName.trim());  // removes the empty spaces at the begenning & end  of the string


let url = 'ayushdas@gmil--com'
console.log(url.replace('-','@'))
console.log(url.includes("ayush"));

let newStr = "Ayush-Das-Agt"
 console.log(newStr.split('-')) // convert the string into an array 
 

 



/*
// ***************************   DIFFERENT METHODS IN STRING *****************************


Name	                     Description

at()	                     Returns an indexed character from a string
charAt()	                 Returns the character at a specified index (position)
charCodeAt()	             Returns the Unicode of the character at a specified index
codePointAt()	             Returns the Unicode value at an index (position) in a string
concat()	                 Returns two or more joined strings
constructor	                 Returns the string's constructor function
endsWith()	                 Returns if a string ends with a specified value
fromCharCode()	             Returns Unicode values as characters
includes()	                 Returns if a string contains a specified value
indexOf()	                 Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	             Returns the index (position) of the last occurrence of a value in a string
length	                     Returns the length of a string
localeCompare()	             Compares two strings in the current locale
match()	                     Searches a string for a value, or a regular expression, and returns the matches
padEnd()	                 Pads a string at the end
padStart()	                 Pads a string from the start
prototype	                 Allows you to add properties and methods to an object
repeat()	                 Returns a new string with a number of copies of a string
replace()	                 Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	             Searches a string for a pattern and returns a new string where all matches are replaced
search()	                 Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	                     Extracts a part of a string and returns a new string
split()	                     Splits a string into an array of substrings
startsWith()	             Checks whether a string begins with specified characters
substr()	                 Extracts a number of characters from a string, from a start index (position)
substring()	                 Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	         Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	         Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	             Returns a string converted to lowercase letters
toString()	                 Returns a string or a string object as a string
toUpperCase()	             Returns a string converted to uppercase letters
trim()	                     Returns a string with removed whitespaces
trimEnd()	                 Returns a string with removed whitespaces from the end
trimStart()	                 Returns a string with removed whitespaces from the start
To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
valueOf()	                 Returns the primitive value of a string or a string object

*/
