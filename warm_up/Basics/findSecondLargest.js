function findSecondLargest(arr) {
    let largestNumber = -Infinity
    let secondLargestNumber = -Infinity

    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > largestNumber) {
            secondLargestNumber = largestNumber; 
            largestNumber = arr[i];
        } else if(arr[i] > secondLargestNumber && arr[i] !=largestNumber) { 
            secondLargestNumber = arr[i]
        }
    }
    return secondLargestNumber; 
}


let arr = [10,20,40,50]
console.log(findSecondLargest(arr))