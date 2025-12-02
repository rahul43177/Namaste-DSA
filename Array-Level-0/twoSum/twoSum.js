function twoSum(arr , target) {
  
  let map = new Map();
  for (let i = 0; i < arr.length;i++) {
    let currentValue = arr[i];
    let compliment = target - currentValue; 
    if(map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(currentValue, i);
  }
  return [-1, -1];
}


let array = [5, 12, 16, 1, 17];
let target = 13;

console.log(twoSum(array, target));