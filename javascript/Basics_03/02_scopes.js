let a = 300
// Declared outside parenthesis => Global scope
if (true){
    let a = 10
    const b = 20
    console.log(`Inner a : ${a}`);
    // inside parentesise => Block scope
}



console.log(`Outer a : ${a}`);



function one()
{
    const username = "Ayush"
    const us2 = "Das"
    console.log(us2);
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);    => Not possibe because website in inside function two

    two()
}

one()



if (true){
    const username = "Ayush"
    if (username === "Ayush"){
        const website = " Valo"
        console.log(username + website);
    }
    //console.log(website); => not possible 

}

//console.log(username);  => not possible




// +++++++++++++++++++++++++++++++++  Interesting ++++++++++++++++++++++++++++

// ############ 1st method #######################
console.log(addone(5))  // Here we can can the function even before function decclarartion


function addone(num){
    return num + 1
}


// ################## 2nd method ##############

// console.log( addtwo(5)); => Error because we have hold a function inside a variable 

const addtwo = function(num)
{
    return num + 2
}

console.log( addtwo(5));


