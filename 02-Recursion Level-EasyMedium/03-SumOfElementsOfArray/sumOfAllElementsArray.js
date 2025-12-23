function sumOfAllElementsArray(arr) {
    let n = arr.length;
    if(n==1) {
        return arr[n-1];
    }

    return arr[n-1] + sumOfAllElementsArray(n-1); 

}

console.log(sumOfAllElementsArray([1,2,3,4,5]))