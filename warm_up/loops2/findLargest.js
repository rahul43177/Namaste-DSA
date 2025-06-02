function findLargest(array) { 
    let largest = -1; 
    for(let i = 0;i<array.length;i++) {
        if(arr[i] > largest){ 
            largest = arr[i]; 
            console.log("INside the loop" , "The largest is : " , largest);
        }
    }
    return largest;
}


let arr = [5,0,10,8,17,1]

console.log(findLargest(arr));