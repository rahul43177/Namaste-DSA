function multiplication(number1 , number2) {
    return number1*number2; 
}

let number1 = 12 
let number2 = 45 

let multi = multiplication(number1, number2);
console.log("Multiplication" , multi)


//square of a number 

function squareOfNumber(x) {
    return x*x; 
}


let square = squareOfNumber(9);
console.log(square)

//eligible for voting 
function isEligibleForVoting(age) { 
    if(age < 0 ) {
        return "Invalid age!"
    } else if(age > 0 && age < 18) {
        return "Not eligible for voting!" 
    }  
    else {
        return "Eligible for voting!"
    }
}

console.log(isEligibleForVoting(-14))
console.log(isEligibleForVoting(20))