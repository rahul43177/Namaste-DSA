// Problem Statement:
// Given an array 'arr' and a value 'target', implement a function to search for 'target' in 'arr'.
// If 'target' is found, return its index in the array. If 'target' is not found, return -1.

function linearSearch(arr , target) {
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] == target) {
            return i;
        }
    }
    return -1; 
}


// --- Test Function ---
function testLinearSearch(arr, target, expected) {
    const result = linearSearch(arr, target);
    const passed = result === expected ? "✅ Passed" : `❌ Failed (Expected ${expected}, got ${result})`;
    console.log(`Array: [${arr}], Target: ${target} , Restult : ${result} => ${passed}`);
}

// --- Run Tests ---

testLinearSearch([10, 20, 30, 40, 50], 30, 2); // Found in middle
testLinearSearch([5, 15, 25, 35], 5, 0);       // Found at start
testLinearSearch([7, 14, 21, 28], 28, 3);      // Found at end
testLinearSearch([1, 2, 3, 4, 5], 10, -1);     // Not found
testLinearSearch([], 5, -1);                   // Empty array
testLinearSearch([9, 3, 6, 3, 7], 3, 1);       // Duplicate values
testLinearSearch(["a", "b", "c"], "b", 1);    // String values
testLinearSearch(["apple", "banana", "cherry"], "cherry", 2);
testLinearSearch([true, false, true], false, 1); // Boolean values