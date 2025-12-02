function reverseInteger(number) {
    let rev = 0;
    let numberCopy = number ; 
    number = Math.abs(number);
    while(number > 0) {
        let lastDigit = number % 10;
        rev = (rev*10) + lastDigit; 
        number = Math.floor(number / 10);
    }   

    let lowestSigned = -(2**31) ; //here we can use Math.pow also to find power 
    let highestSigned = (2**31)-1; 

    if(rev < lowestSigned || rev > highestSigned) return 0 ;  
    
    return numberCopy < 0 ? -rev : rev ; 
}

let number = 1234;
console.log(reverseInteger(number))
console.log(reverseInteger(-1234))