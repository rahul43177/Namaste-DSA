/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2

Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2

Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Constraints:

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.
*/


function missingNumber(arr) {
    let n = arr.length;
    let totalSumTillN = n *(n+1)/2;
    let totalSumTillArr = 0;
    for(let val of arr) {
        totalSumTillArr += val; 
    }
    return totalSumTillN - totalSumTillArr;
}


// Test cases

console.log(missingNumber([3, 0, 1])); // Expected: 2
console.log(missingNumber([0, 1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8

// Edge case: Only one number missing from [0, 1]
console.log(missingNumber([0])); // Expected: 1
console.log(missingNumber([1])); // Expected: 0

// Large input
console.log(missingNumber([...Array(1000).keys()].filter(x => x !== 42))); // Expected: 42

// Missing first number
console.log(missingNumber([1, 2, 3, 4])); // Expected: 0

// Missing last number
console.log(missingNumber([0, 1, 2, 3])); // Expected: 4

// Random test with unique numbers
console.log(missingNumber([5, 2, 0, 3, 1])); // Expected: 4

// Empty array? Well, per constraints it won't happen because n == nums.length, but still...
console.log(missingNumber([])); // Expected: 0 (since n=0 → sum from 0 to 0 is 0)