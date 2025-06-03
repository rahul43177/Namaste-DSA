const findSecondLargestNumber = arr => {
    let largestNumber = -Infinity; 
    let secondLargest = -Infinity; 

    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > largestNumber) {
            secondLargest = largestNumber ; 
            largestNumber = arr[i] ; 
        } else if(arr[i]!=largestNumber && secondLargest < arr[i]) {
            secondLargest = arr[i] ; 
        }
    }
    return secondLargest; 
}

let arr1 = [5,11,23 , 1, ,3 ,9 ] ;
let arr2= [10,20,30,33]

console.log(findSecondLargestNumber(arr1))
console.log(findSecondLargestNumber(arr2))