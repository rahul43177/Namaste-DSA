const removeElement = (arr , val) => {
  let j = 0; 
  for (let i = 0; i < arr.length;i++) {
    if(arr[i] != val) { //this means we have not found the defective material 
      arr[j] = arr[i]; 
      j++;
    }
  }
  return j; 
}

let arr = [0,1,2,2,3,0,4,2]
let val = 2; 

let filtered = removeElement(arr, val);
console.log(filtered);
