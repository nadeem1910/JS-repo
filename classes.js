function getAge(){
    return 23
}

function utility(name , age = getAge()){
    console.log(name, age)
}

utility("Shoaib")


class Human
{
    // properties
    age // public
    #wt = 79 // private
    ht = 172

    constructor(newAge){
        this.age = newAge
    }
    // behavior
    walking(){
        console.log("Humans can walk", this.#wt)
    }

    eating(){
        console.log("humans can eat")
    }

    get fetchValue(){
        return this.#wt;
    }

    set setValue(val){
        this.#wt = val;
    }
}

let obj = new Human(22)
console.log(obj.age)
// obj.walking()
console.log(obj.fetchValue)

function yourName(fname = "Imran" , lname = "Khan"){  // Imran Khan is example of default parameter
    console.log("Your name is -: ",fname," ",lname)
}

yourName()