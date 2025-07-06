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

function removeElements(arr , val) {
    let x=  0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] != val) {
            arr[x] = arr[i];
            x+=1;
        }
    }
    return x;
}

// --- Enhanced Test Runner ---

console.log("--- Running Enhanced Test Suite ---");

let totalTests = 0;
let passedTests = 0;

// Helper function to run a single test and print the result
function runTestCase(description, nums, val, expectedK, expectedNums) {
    totalTests++;
    console.log(`
--- Test Case ${totalTests}: ${description} ---`);
    const originalNums = [...nums]; // Copy for display purposes
    console.log(`Input Array: [${originalNums}], Value to Remove: ${val}`);
    console.log(`Expected Length (k): ${expectedK}`);
    console.log(`Expected Array (first k elements): [${expectedNums}]`);

    const k = removeElements(nums, val);
    const resultToShow = nums.slice(0, k);

    // Validation
    const isKCorrect = k === expectedK;
    const areNumsCorrect = JSON.stringify(resultToShow) === JSON.stringify(expectedNums);
    const testPassed = isKCorrect && areNumsCorrect;

    console.log(`Actual Length (k): ${k}`);
    console.log(`Actual Array (first k elements): [${resultToShow}]`);

    if (testPassed) {
        passedTests++;
        console.log("Result: ✅ Passed");
    } else {
        console.log("Result: ❌ Failed");
        if (!isKCorrect) {
            console.log(`   -> Incorrect length returned. Expected ${expectedK}, but got ${k}.`);
        }
        if (!areNumsCorrect) {
            console.log(`   -> The modified array is incorrect. Expected [${expectedNums}], but got [${resultToShow}].`);
        }
    }
}

// --- Test Cases ---
runTestCase("Value at the beginning", [4, 1, 2, 3], 4, 3, [1, 2, 3]);
runTestCase("Value at the end", [1, 2, 3, 4], 4, 3, [1, 2, 3]);
runTestCase("Value in the middle", [1, 4, 2, 3], 4, 3, [1, 2, 3]);
runTestCase("Multiple occurrences", [4, 1, 4, 2, 3, 4], 4, 3, [1, 2, 3]);
runTestCase("All elements are the value", [4, 4, 4, 4], 4, 0, []);
runTestCase("No elements match the value", [1, 2, 3], 4, 3, [1, 2, 3]);
runTestCase("Empty array", [], 4, 0, []);
runTestCase("Array with negative numbers", [-1, -5, 3, -1, 8], -1, 3, [-5, 3, 8]);
runTestCase("Array with zeros", [0, 1, 0, 2, 0, 3], 0, 3, [1, 2, 3]);
runTestCase("Complex mixed array", [5, 3, 5, 1, 5, 8, 5, 9, 5], 5, 4, [3, 1, 8, 9]);

// --- Final Score ---
console.log(`
--- Test Suite Summary ---`);
const score = totalTests > 0 ? (passedTests / totalTests) * 100 : 100;
console.log(`Total Test Cases: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${totalTests - passedTests}`);
console.log(`Final Score: ${score.toFixed(2)}%`);

if (totalTests === passedTests) {
    console.log("\n🎉 All tests passed successfully! 🎉");
} else {
    console.log("\nSome tests failed. Please review the output above.");
}


