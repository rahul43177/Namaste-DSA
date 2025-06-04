function findSecondLargest(arr) {
    try {
        if(arr.length < 2) {
            throw new Error("Array should have at least 2 elements!"); 
        } 
        let largest = -Infinity ; 
        let secondLargest = -Infinity ; 

        for(let i = 0;i<arr.length;i+=1) {
            if(arr[i] > largest) {
                secondLargest = largest ; 
                largest = arr[i] ; 
            } else if(arr[i] != largest && arr[i] > secondLargest) {
                secondLargest = arr[i] ; 
            }
        }
    } catch(error) {
        console.log("The error :" , error) ;
    }
}


let arr = [10,2,33,45];
console.log(findSecondLargest(arr));