// This function takes an array as an argument and returns the smallest number in the array.
// If the array is empty, it returns undefined.
// If the array contains non-numeric values, it throws an error.
function findSmallest(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // or throw new Error('Array cannot be empty');
    }
    
    // Check if all elements in the array are numbers
    if (!arr.every(element => typeof element === 'number' && !isNaN(element))) {
        throw new Error('Array must contain only numbers');
    }
    
    // Return the smallest number in the array
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

// Test cases
console.log(findSmallest([10, 5, 8, 3, 45, 21, 1])); // 1
console.log(findSmallest([10])); // 10
console.log(findSmallest([-5, -10, 0, 5])); // -10
console.log(findSmallest([-5, -10, 0, 5, 10])); // -10
console.log(findSmallest([])); // undefined
console.log(findSmallest([-5, -10, 0, 5, 10, 45, 21, 1])); // -10
console.log(findSmallest(['not a number'])); // Error
console.log(findSmallest('not an array')); // Error