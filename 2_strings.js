let name = "Nadeem"
let repoCount = 10

console.log(name + repoCount + " values"); // old way 
console.log(`my name is ${name} and my repo count is ${repoCount}`)  // string interpolation new way it creates placeholders

const user = new String('user12')
console.log(user.__proto__)
console.log(user[2])
//console.table([user])

console.log(user.toUpperCase())
console.log(user.length)

console.log(user.indexOf('r'));
console.log(user.charAt(2));

// substring method
const newString = user.substring(0,5)
console.log(newString)

// slice method
let owner = 'nadeem khan'
console.log(owner.slice(0,8))
console.log(owner) // slice method doesn't change the original string 

// splice method
let fruits = ["Apple","Mango","Banana","Orange","Grapes","Guava"]
console.log(fruits)
console.log(fruits.splice(0,2))
console.log(fruits)
console.log(fruits.splice(1,2,"Lemon","Litchi"))
console.log(fruits) // splice method change the original string

// trim method
const string = "   nadeem   "
console.log(string)
console.log(string.trim())
console.log(string)
console.log(string.trimStart())
console.log(string)
console.log(string.trimEnd())
console.log(string)

// replace method
const url = 'https://facebook.com/nadeem%20khan'

console.log(url.replace('%20','-'))
console.log(url) // this method doesn't change the original string

console.log(url.includes('nadeem'))

// split method

const playName = "Mother courage and her children"
console.log(playName.split(' '))
console.log(playName) // this method doesn't change the original string
// console.log(playName.strike())
