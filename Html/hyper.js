console.log("This is tutorial 6")    


// let name="Sky"
// let name1="Water"
// let name2="Fire"
// let name3="Air"

// console.log(name + "is blue");
// console.log(name1 + "is blue");
// console.log(name2 + "is  red")
// console.log(name3 + "is one of the most important component to live .")

function repeat(name,greet="Good Luck")
{
    console.log(greet + " " + name)
    console.log(name + " is a good boy")
}

function sum(a,b,c)
{
    let d=a+b+c;
    return d;
    //console.log("Finction is returned") // after return no line gets executed
}

let name ="harry"
let name1="aysh"
let name2="esh"
let name3="zack"
let greet="Good Morning";

repeat(name,greet)
repeat(name1,greet)
repeat(name2,greet)
repeat(name3) // as other parameter is not passed here so it take that parameter which is defined in other fnc

let returnval=sum(1,2,3)
console.log("Sum is " + returnval)