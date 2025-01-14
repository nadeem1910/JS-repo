const array = [1,2,3,4,5]
console.log(array)

const newArray = new Array(6,12,18,24,30)
console.log(newArray)

console.log(newArray[3])

// arrays methods --> i) push -> insertion from the back
console.log(array.push(6))
console.log(array.push(7));
console.log(array.push(8));
console.log(array.push(9));
console.log(array)

// ii) pop --> deletion from the back
console.log(array.pop())
console.log(array)

// iii) unshift --> insertion from front
console.log(array.unshift(-10))
console.log(array.unshift(-20))
console.log(array)
// iv) shift --> deletion from front
console.log(array.shift())
console.log(array)

// v) includes 
console.log(array.includes(6))

// vi) indexof 
console.log(array.indexOf(3))

// slice 
console.log(array)
let newElement = array.slice(1,4)
console.log(newElement)
console.log(array)

// splice 
console.log(array)
let splicedArr = array.splice(0,4)
console.log(splicedArr)
console.log(array)

const myArr = newArray.join()
console.log(myArr) // object to string

const cricket = ["India","Australia","South Africa","England"]

cricket.forEach((element,index)=>{
    console.log(`The cricket team -: ${element} and it's index is ${index}`)
})

console.log(cricket.reverse())

let obj = {
    "name": "Nadeem",
    "age": 22,
    "gender": "Male"
}

console.log(obj.name);
console.log(obj);

const userMap = new Map();
userMap.set("User1","Imran")
userMap.set("User2","Shoaib")
userMap.set("User3","Nadeem")

console.log(userMap)
console.log(userMap.get("User1"))

// const fruits = [{"Apple" : 200,"Banana" : 100,"Orange" : 250}]
// const map = new Map(fruits)
// console.log(map)

const fruits = Object.entries({"Apple": 200, "Banana": 100, "Orange": 250});
const map = new Map(fruits);
console.log(map);