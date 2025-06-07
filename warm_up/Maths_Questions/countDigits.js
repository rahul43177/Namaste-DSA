function countDigits(number) {
    //Take care of the negative number to make it absolute
    number = Math.abs(number);
    //if number uis zero -> it will have 1 digit 
    //if number is greater than 0 and smaller than 10 - it will always be single digit 
    if(number == 0 || (number > 0 &&number < 10)) {
        return 1; 
    }
    let count = 0;
    while(number > 0) {
        count++;
        number = Math.floor(number/10);
    }
    return count ; 
}

let number = 6801034;
let number1 = 12;
let number2 = 1;
let number3 = -33;
console.log(countDigits(number))
console.log(countDigits(number1))
console.log(countDigits(number2))
console.log(countDigits(number3))