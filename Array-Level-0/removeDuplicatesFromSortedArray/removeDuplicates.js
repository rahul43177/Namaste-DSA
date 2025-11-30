function removeDuplicates(arr) {
  let j = 0;
  for (let i = 1; i < arr.length;i++) {
    if(arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1; 
}

let array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let unique = removeDuplicates(array)
console.log(`The unique number of elements are : ${unique}`);