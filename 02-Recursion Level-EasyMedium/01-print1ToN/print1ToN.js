function print1ToN(n) {
    if(n==0) return;
    print1ToN(n-1);
    console.log(n);
}

let number = 5
print1ToN(number);