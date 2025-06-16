/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
*/

function MaxConsecutiveOnes(arr) {
    let currentCount = 0;
    let maxOnes = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] == 1) {
            currentCount++;
            maxOnes = Math.max(currentCount , maxOnes);
        }else{
            currentCount = 0;
        }
    }
    return maxOnes; 
}

// Test cases
console.log(MaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Expected output: 3
console.log(MaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Expected output: 2
console.log(MaxConsecutiveOnes([1, 1, 1, 1, 1]));    // Expected output: 5
console.log(MaxConsecutiveOnes([0, 0, 0, 0]));       // Expected output: 0
console.log(MaxConsecutiveOnes([]));               // Expected output: 0
console.log(MaxConsecutiveOnes([1]));              // Expected output: 1
console.log(MaxConsecutiveOnes([0, 1, 0, 1, 0, 1])); // Expected output: 1
console.log(MaxConsecutiveOnes([1, 1, 0, 1, 1, 0, 1, 1, 1])); // Expected output: 3
console.log(MaxConsecutiveOnes([1, 0, 0, 0, 0]));   // Expected output: 1
console.log(MaxConsecutiveOnes([0, 1, 1, 0, 1, 1, 1, 0])); // Expected output: 3