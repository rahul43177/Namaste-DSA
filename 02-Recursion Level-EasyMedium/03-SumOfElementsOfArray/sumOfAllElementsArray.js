//METHOD 1 : sending array and length 
function sumOfAllElementsOfArrayWithLength(arr , len) {
    let index = len - 1; 
    if(index == 0) return arr[index];

    return arr[index] + sumOfAllElementsOfArrayWithLength(arr, len-1);
}


function sumOfAllElementsOfArrayWithIndex(arr, index) {
    if(index == 0) return arr[0];
    return arr[index] + sumOfAllElementsOfArrayWithIndex(arr , index-1);
}



let array = [1,2,3,4,5];
let len = array.length; 
let lastIndex = len - 1; 
let sum1 = sumOfAllElementsOfArrayWithLength(array , len);
let sum2 = sumOfAllElementsOfArrayWithIndex(array , lastIndex);
console.log("Sum 1 :",sum1); 
console.log("Sum 2 :",sum2); 

