function bubbleSort(arr) {
    let n = arr.length; 
    for(let i = 0;i<n-1;i+=1) {
        for(let j = 0;j<n-1-i;j+=1) {
            if(arr[j] > arr[j+1]) {
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]] //swapping in es6 , otherwise we can use temp variable method
            }
        }
    }
    return arr; 
}



let arr = [5, 2, 4, 1, 3]
console.log("Before Array :",arr);
let sortedArray = bubbleSort(arr);
console.log("Sorted Array :", sortedArray );

