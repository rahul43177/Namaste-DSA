function findSecondLargest(arr) {
    let largestNumber = -Infinity; 
    let secondLargestNumber = -Infinity; 
    

    //what if our array is empty or only single 
    //empty array 
    if(arr.length == 0 ) {
        return `Array can't be negative.`
    }
    //single element 
    if(arr.length == 1) {
        return `Array should have atleast 2 elements.`; 
    }
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > largestNumber) {
            secondLargestNumber = largestNumber ; 
            largestNumber = arr[i] ;
        } //here in else if : arr[i] != largestNumber => This condition make sure largestNumber duplicates are ignored. 
        else if(arr[i] != largestNumber && arr[i] > secondLargestNumber) {
            secondLargestNumber = arr[i] ; 
        }
    }
    return secondLargestNumber ; 
}

const numbers = [10, 5, 20, 8, 20, 15];
const second = findSecondLargest(numbers);
console.log(`Second largest number in array : ${numbers} is : ${second}`);