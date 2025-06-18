function printingTillN(n) {
    if(n==0) return; //this is base case, this condition will stop the program execution
    console.log(n);
    n--;
    printingTillN(n);
}


let a = 10;
let b = 20;
printingTillN(a);
console.log("\n");
printingTillN(b);