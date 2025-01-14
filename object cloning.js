let src = {
    age : 22,
    ht : 172,
    wt : 79
}

// 1st way of object cloning USING SPREAD OPERATOR
console.log(src)
let dest = {...src}
console.log(dest)   // object cloning

let dest1 = src
console.log(dest1)  // this is an example of copying a reference 



// ii) 2nd way using Object.assign()
let objStudent = {
    fullName : "Md Nadeem Khan",
    age : 22,
    gender : "Male",
    feesSubmit : true
}

console.log(objStudent)

let objClone = Object.assign({},objStudent)

console.log(objClone)