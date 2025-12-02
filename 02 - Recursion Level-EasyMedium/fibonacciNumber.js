/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

*/

function fibonacciNumber(n) {
    /*
    Base Condition : 
    0 and 1 are default in the sequence. 
    f(0) = 0 
    f(1) = 1 
    */
    if(n<=1) return n ; 
    return fibonacciNumber(n-1) + fibonacciNumber(n-2);
}


// --- Testing the function ---
console.log("Testing Fibonacci function:");

for (let i = 0; i <= 10; i++) {
    console.log(`fibonacciNumber(${i}) = ${fibonacciNumber(i)}`);
}