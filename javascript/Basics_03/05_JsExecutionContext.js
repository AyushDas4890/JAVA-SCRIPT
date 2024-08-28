//++++++++++++++++++++++++++++++++++++++++    JAVASCRIPT EXECUTION CONTEXT +++++++++++++++++++++++

/*

{} =>It contains
    1.Global Execution Context 
    2.Function Execution Context
    3.Eval Execution Context

let us understand how a JS code execute
1. Global execution
2. Memory creation phase / creation phase
=> only the variable which have been declard is allocated memory in this phase

3. Execution phase



let us understand with the help of a code */

let val1 = 10
let val2 = 5
function addnum(num1 , num2){
    let total = num1 + num2
    return total
}
    let result1 = addnum(val1, val2)
let result2 = addnum(10 , 2)

/* 1 => Global execution context => this

   2 Memory pha nse =>
        val1 => undefined
        val2 => undefined
        addnum => defination
        result1 => undefined
        result2 => undefined

    3 Execution Phase

        val1 => 10
        val2 => 5       
        addnum=> will create a new execution context
                            New Execution Context => new variable enviroment + execution thread

                            a.   Memory phase =>
                                val1 => undefined
                                val2 => undefined
                                total => undefined
                            
                            b. execution context =>
                                num1 => 10
                                num2 => 15
                                total => 15 => it is returned to global execution context

                                after completion the new execution context will be deleted.


        result1 => 15

        NVE + THREAD => MEMORY & EXECUTION PHASE WILL BE REPEATED

        result2 => 12*/