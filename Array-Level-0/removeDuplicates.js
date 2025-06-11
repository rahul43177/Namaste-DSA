/*

Given a sorted array nums, remove duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array; modify the input array in-place with O(1) extra memory. 

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_] (the underscore represents elements beyond the new length)

Here the input after removing the duplicate for the unique element is 2 

*/
function removeDuplicates(arr) {
    /*
    We will have 2 pointers : 
    x -> This pointer will take care of the position 
    i -> This is one pointers - this will check for the unique elements 
    */

    let x = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > arr[x]) { //I have found the next big and unique number , as the array is sorted non-decreasingly 
            x++;
            arr[x] = arr[i];
        }
    }
    //number of unique elements in the array 
    return x + 1;
}


// Test Case 1: Basic case with one duplicate
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // Expected Output: 2
console.log(nums1); // Expected Output: [1, 2, ...]

// Test Case 2: All elements are the same
let nums2 = [2, 2, 2];
console.log(removeDuplicates(nums2)); // Expected Output: 1
console.log(nums2); // Expected Output: [2, 2, 2] (only first element is valid)

// Test Case 3: No duplicates
let nums3 = [1, 2, 3, 4];
console.log(removeDuplicates(nums3)); // Expected Output: 4
console.log(nums3); // Expected Output: [1, 2, 3, 4]

// Test Case 4: Empty array
let nums4 = [];
console.log(removeDuplicates(nums4)); // Expected Output: 0
console.log(nums4); // Expected Output: []

// Test Case 5: Multiple duplicates in a larger array
let nums5 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums5)); // Expected Output: 5
console.log(nums5); // Expected Output: [0, 1, 2, 3, 4, ...rest can be ignored]

// Test Case 6: Single element
let nums6 = [5];
console.log(removeDuplicates(nums6)); // Expected Output: 1
console.log(nums6); // Expected Output: [5]

// Test Case 7: Negative numbers with duplicates
let nums7 = [-5, -5, -4, -4, -3];
console.log(removeDuplicates(nums7)); // Expected Output: 3
console.log(nums7); // Expected Output: [-5, -4, -3, -4, -3]

// Test Case 8: Large number of duplicates
let nums8 = [1, 1, 1, 1, 1, 1, 1];
console.log(removeDuplicates(nums8)); // Expected Output: 1
console.log(nums8); // Expected Output: [1, 1, 1, ...]



function runTest(nums) {
    const k = removeDuplicates(nums);
    console.log(`Input:`, nums.slice(0));
    console.log(`Output Length:`, k);
    console.log(`Modified Array (valid part):`, nums.slice(0, k));
    console.log('---');
}

runTest([1, 1, 2]);
runTest([2, 2, 2]);
