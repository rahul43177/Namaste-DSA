const arr = [1,2,3,4,5,]
console.log("arr" , arr)
console.log("-----\n")


//objects in javaScript 
let obj = {
    firstName : "Anshul" , 
    lastName : "Kumar" , 
    age : 24 , 
    profession : "Software Engineer" 
}


let fullName = obj["firstName"] + " " + obj.lastName; 
console.log(fullName);
console.log("-----\n");



console.log("New name")
obj.firstName = "Muskan"
obj["lastName"] = "Acharya"

console.log("obj" , obj)