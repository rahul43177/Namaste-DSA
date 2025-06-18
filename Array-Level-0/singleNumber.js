/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
Each element in the array appears twice except for one element which appears only once.
*/


/**
 * 
 * Two methods 
 * 1. Hash Map 
 * 2. XOR Operator
 */

//1. Using Hash Map -> SC = O(n)
function singleNumber(arr) {
    let hash = {};
    //couting of all the occurence of each element
    for(let val of arr) {
        if(hash[val]) {
            hash[val]++;
        } else {
            hash[val] = 1;
        }
    }
    //find the element which is coming once
    for(let i = 0;i<arr.length;i+=1) {
        if(hash[arr[i]] == 1) {
            return arr[i];
        }
    }
}


//2. using XOR , SC -> O(1)
function optimalSingleNumber(arr) {
    let result = 0;
    for(let val of arr) {
        result ^= val;
    }
    return result; 
}


// -----------------------------
// ✅ Test Cases
// -----------------------------

function runTests() {
    const testCases = [
        // Example from problem
        { input: [2, 2, 1], expected: 1 },
        { input: [4, 1, 2, 1, 2], expected: 4 },
        { input: [1], expected: 1 },

        // Negative number
        { input: [-1, -1, 3], expected: 3 },
        { input: [-5, 2, 2], expected: -5 },

        // Larger input
        { input: [10, 20, 30, 20, 10], expected: 30 },
        { input: [9, 7, 9, 9, 9, 7, 0], expected: 0 }, // only zero appears once

        // All positives
        { input: [3, 5, 3], expected: 5 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const output1 = singleNumber(input);
        const output2 = optimalSingleNumber(input);

        console.log(`Test Case ${index + 1}:`);
        console.log("  Input:", input);
        console.log("  Expected Output:", expected);
        console.log("  Hash Map Output:", output1);
        console.log("  XOR Output:", output2);
        console.log("  Passed (Hash Map)?", output1 === expected ? "✅" : "❌");
        console.log("  Passed (XOR)?     ", output2 === expected ? "✅" : "❌");
        console.log("----------------------------------------");
    });
}

runTests();