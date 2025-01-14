// function declaration
function greet(name){
    console.log(`Name -: ${name}`)
}
greet("Nadeem");

// function expression are of 2 types
// i) Anonymous function expression
let user = function(userName){
    console.log(`UserName -: ${userName}`)
}
user("Nadeem1910")

// ii) Named function expression
let nation = function nationality(name){
    console.log(`Nationality -: ${name}`)
}
nation("Indian")

// Arrow function i) Multi Line
let student = (name) => {
    console.log(`Student name is ${name}`)
}
student("Shoaib")

// ii) Single Line
let repoCount = (count) => console.log(`Repo Count is ${count}`)
repoCount(25);

// IIFE
(function(){
    console.log("this is iife")
})()