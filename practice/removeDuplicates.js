function removeDuplicates(arr) {
    let j = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    console.log("\n")
    console.log("j+1 :" , j+1)
    return arr; 
}

let array = [0,0,1,1,1,2,2,3,3];

let newArray = removeDuplicates(array);
console.log(`New array is : ${newArray}`);