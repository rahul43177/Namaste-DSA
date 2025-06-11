/**
 * Removes all occurrences of a given value from an array in-place and returns the new length.
 * The order of elements can be changed, and elements after the new length are ignored.
 * The function modifies the input array such that the first k elements contain all elements
 * not equal to val, where k is the number of elements not equal to val.
 *
 * @param {number[]} nums - The input array of integers to modify in-place.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The number of elements in nums that are not equal to val.
 *
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2
 * Explanation: The function should return k = 2, with the first two elements of nums being [2,2].
 * The array becomes [2,2,3,3] (or similar, as elements after index k-1 are ignored).
 *
 * Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5
 * Explanation: The function should return k = 5, with the first five elements of nums being [0,1,3,0,4].
 * The array becomes [0,1,3,0,4,2,2,2] (or similar).
 *
 * Notes:
 * - The solution must operate in-place with O(1) extra space.
 * - Time complexity should be O(n), where n is the length of nums.
 * - The elements beyond the new length k are not considered in the output.
 */

function removeElement(array , val) {
    let x = 0;
    for(let i = 0;i<array.length;i++) {
        if(array[i] !== val) {
            array[x] = array[i] ; 
            x++;
        }
    }
    return x ; 
}


// Simple test framework
let testCount = 0;
let passedTests = 0;

function runTest(description, nums, val, expectedK, expectedNumsPrefix) {
    testCount++;
    // Clone input array to avoid modifying the original
    const input = [...nums];
    const result = removeElement(input, val);
    
    // Check return value
    const returnValueCorrect = result === expectedK;
    
    // Check first k elements of the modified array
    let arrayCorrect = true;
    for (let i = 0; i < expectedK; i++) {
        if (input[i] !== expectedNumsPrefix[i]) {
            arrayCorrect = false;
            break;
        }
    }
    
    const passed = returnValueCorrect && arrayCorrect;
    if (passed) {
        passedTests++;
        console.log(`Test ${testCount}: Passed - ${description}`);
    } else {
        console.log(`Test ${testCount}: Failed - ${description}`);
        console.log(`  Input: nums = [${nums}], val = ${val}`);
        console.log(`  Expected: k = ${expectedK}, nums[0:${expectedK}] = [${expectedNumsPrefix}]`);
        console.log(`  Got: k = ${result}, nums = [${input}]`);
    }
}

// Test cases
// Test 1: Example 1 from problem description
runTest(
    "Example 1: Remove 3 from [3,2,2,3]",
    [3, 2, 2, 3],
    3,
    2,
    [2, 2]
);

// Test 2: Example 2 from problem description
runTest(
    "Example 2: Remove 2 from [0,1,2,2,3,0,4,2]",
    [0, 1, 2, 2, 3, 0, 4, 2],
    2,
    5,
    [0, 1, 3, 0, 4]
);

// Test 3: Empty array
runTest(
    "Edge case: Empty array",
    [],
    1,
    0,
    []
);

// Test 4: Single element equal to val
runTest(
    "Edge case: Single element equal to val",
    [2],
    2,
    0,
    []
);

// Test 5: Single element not equal to val
runTest(
    "Edge case: Single element not equal to val",
    [1],
    2,
    1,
    [1]
);

// Test 6: All elements equal to val
runTest(
    "Edge case: All elements equal to val",
    [3, 3, 3, 3],
    3,
    0,
    []
);

// Test 7: No elements equal to val
runTest(
    "Edge case: No elements equal to val",
    [1, 2, 3, 4],
    5,
    4,
    [1, 2, 3, 4]
);

// Test 8: Maximum array length (100) with mixed values
runTest(
    "Boundary case: Maximum array length",
    Array(50).fill(1).concat(Array(50).fill(2)),
    1,
    50,
    Array(50).fill(2)
);

// Test 9: Maximum nums[i] value (50)
runTest(
    "Boundary case: Maximum nums[i] value",
    [50, 1, 50, 2],
    50,
    2,
    [1, 2]
);

// Test 10: Maximum val (100)
runTest(
    "Boundary case: Maximum val",
    [1, 2, 3],
    100,
    3,
    [1, 2, 3]
);

// Test 11: Minimum values (nums[i] = 0, val = 0)
runTest(
    "Boundary case: Minimum values",
    [0, 1, 0, 2],
    0,
    2,
    [1, 2]
);

// Test 12: Array with repeated non-val elements
runTest(
    "Normal case: Repeated non-val elements",
    [1, 1, 2, 1, 2, 1],
    2,
    4,
    [1, 1, 1, 1]
);

// Summary
console.log(`\nTest Summary: ${passedTests}/${testCount} tests passed`);
if (passedTests === testCount) {
    console.log("All tests passed successfully!");
} else {
    console.log("Some tests failed. Review the output above for details.");
}