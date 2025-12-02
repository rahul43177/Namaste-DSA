function isPalindrome(number) {
    let temp = number //To compare at the last; 
    let rev = 0;
    while(number > 0) {
        let lastDigit = number % 10;
        rev = (rev*10) + lastDigit; 
        number = Math.floor(number / 10);
    }
    return rev == temp; 
}

let n = 121
let n1= -1121 
let n2= -1 
let n3= 0 
let n4 = 1234 

let isPal = isPalindrome(n)
let isPal1= isPalindrome(n1)
let isPal2= isPalindrome(n2)
let isPal3= isPalindrome(n3) 

console.log(isPal  ? "Palindrome Number" : "Not Palidrome Number");
console.log(isPal1 ? "Palindrome Number" : "Not Palidrome Number");
console.log(isPal2 ? "Palindrome Number" : "Not Palidrome Number");
console.log(isPal3 ? "Palindrome Number" : "Not Palidrome Number");
