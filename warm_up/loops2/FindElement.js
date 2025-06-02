/*
  Find an element in the array and return the index , and if it is not found return -1. 
 */

let array = [10,4,11,15,5,3,21]; 
let element = 3 ; 

function findElement(array , element) {
    for(let i = 0;i<array.length;i++) {
        if(array[i] == element) {
            return i ; 
        }
    }
}

const index = findElement(array , element);
console.log(`The index is : ${index}`);