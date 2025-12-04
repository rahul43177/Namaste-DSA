/**
* Binary Search
* 
* Given an array of integers nums which is sorted in ascending order, and an integer target,
* write a function to search target in nums. If target exists, then return its index.
* Otherwise, return -1.
* 
* You must write an algorithm with O(log n) runtime complexity.
* 
* Example 1:
* Input: nums = [-1,0,3,5,9,12], target = 9
* Output: 4
* Explanation: 9 exists in nums and its index is 4
* 
* Example 2:
* Input: nums = [-1,0,3,5,9,12], target = 2
* Output: -1
* Explanation: 2 does not exist in nums so return -1
* 
* Constraints:
* - 1 <= nums.length <= 10^4
* - -10^4 < nums[i], target < 10^4
* - All the integers in nums are unique
* - nums is sorted in ascending order
* 
* Approach:
* Use the divide and conquer strategy. Compare the target with the middle element
* of the array. If they match, return the index. If target is less than middle,
* search in the left half. If target is greater than middle, search in the right half.
* Continue this process until the target is found or the search space is exhausted.
* 
* Time Complexity: O(log n) - we eliminate half of the search space in each iteration
* Space Complexity: O(1) - using iterative approach with constant extra space
*/

function binarySearch(arr , target) {
    //we will maitain 2 pointers
    let left = 0; //start index
    let right = arr.length -1 //last index 

    while(left <= right) {
        let middle = Math.floor((left+right)/2);
        if(arr[middle] == target) return middle
        else if(arr[middle] > target) {
            right = middle-1;
        } else if(arr[middle] < target) {
            left = middle+1; 
        }
    } 
    return -1; 
}



console.log("Testing binarySearch function:");

// Test Case 1: Basic example from LeetCode
console.log(binarySearch([-1,0,3,5,9,12], 9)); // Expected: 4

// Test Case 2: Target not found
console.log(binarySearch([-1,0,3,5,9,12], 2)); // Expected: -1

// Test Case 3: First element
console.log(binarySearch([-1,0,3,5,9,12], -1)); // Expected: 0

// Test Case 4: Last element
console.log(binarySearch([-1,0,3,5,9,12], 12)); // Expected: 5

// Test Case 5: Single element - found
console.log(binarySearch([5], 5)); // Expected: 0

// Test Case 6: Single element - not found
console.log(binarySearch([5], 3)); // Expected: -1

// Test Case 7: Target smaller than all
console.log(binarySearch([1,3,5,7,9], 0)); // Expected: -1

// Test Case 8: Target larger than all
console.log(binarySearch([1,3,5,7,9], 10)); // Expected: -1
