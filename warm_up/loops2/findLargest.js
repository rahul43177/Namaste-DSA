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