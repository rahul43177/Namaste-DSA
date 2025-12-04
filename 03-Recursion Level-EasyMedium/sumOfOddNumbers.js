//sum of odd numbers in the array 
let arr = [11 , 13 , 14];
function sum(n) { //here n is the last index and it will go till first index 0
    let isOdd = arr[n] % 2 != 0 ; 
    if(n == 0) return isOdd ? arr[n] : 0 ;
    return (isOdd ? arr[n] : 0) + sum(n-1);
}

console.log(sum(arr.length - 1))