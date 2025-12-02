function maxConsecutiveOnes(arr) {
  let currentOnes = 0;
  let maxOnes = 0;
  for (let i = 0; i < arr.length;i++) {
    if(arr[i] == 1) {
      currentOnes++;
    } else {
      currentOnes = 0; 
    }
    
    maxOnes = Math.max(currentOnes, maxOnes);
  }
  return maxOnes; 
}

let array = [1,0,1,1,1,1,1,1,0,1]
let maxOnesInArray = maxConsecutiveOnes(array);
console.log(`The max ones in the array ${array} are : ${maxOnesInArray}`);


