//first method : Assigning Largest as the smallest first 
function findLargest(array) {
    let largest = -Infinity;  //largest number : assign as the smallest to get the first number; 
    for(let i = 0;i<array.length;i++) {
        if(array[i] > largest) {
            largest = array[i]; 
        }
    }
    return largest; 
}

let array = [10,18 , 1, -1 , 12 , 34]
let large = findLargest(array) ;
console.log(`The largest number in the array is : ${large}`);

//second method : Assign the largest as the first element of the array 
function findLargest2(array){ 
    let largest = array[0];
    for(let i = 1;i<array.length;i+=1) { //First number is assigned to the largest , starting the loop from second
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
} 

console.log("\n")
console.log("----------\n")
let largeNumber = findLargest2(array)
console.log(`The largest number in the array is : ${largeNumber}`);