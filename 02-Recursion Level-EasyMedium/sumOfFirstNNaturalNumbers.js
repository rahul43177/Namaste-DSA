//Sum of first N Natural Number using Recursion
function sumOfNNaturalNumber(n) {
    if(n == 0) return 0;
    return n + sumOfNNaturalNumber(n-1);
}


let a = 10;
let b = 5;
console.log(sumOfNNaturalNumber(a));
console.log(sumOfNNaturalNumber(b));