//selection sort
function selectionSort(arr) {
  /*
  1. maintain a minimum index -> minIndex -> it will take care of the min element found in the loop iteration 
  2. outer loop -> each loop bring the shortest to the initial position 
  3. inner loop -> it will go to each element and find the current minimum element
  4. swapping -> it will check if we found any minimum or not and if found , we will swap the values 
  */
  
  let n = arr.length; 
  for(let i = 0;i<n-1;i++) {
    let minIndex = i;
    for(let j = i+1;j<n;j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j ;
      }
    }
    
    if(minIndex != i) {
      [arr[i] ,arr[minIndex]] = [arr[minIndex] , arr[i]];
    }
  }
  return arr; 
}

let arr = [5,2,3,7,4,8];
console.log(selectionSort(arr))