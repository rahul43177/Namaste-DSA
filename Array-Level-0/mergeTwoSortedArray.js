
/*
LeetCode Problem 88: Merge Sorted Array

You are given two integer arrays, `nums1` and `nums2`, sorted in non-decreasing order, and two integers, `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

The task is to merge `nums1` and `nums2` into a single array, sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

---

### Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

### Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

### Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

---

### Constraints:
- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

---

### Follow-up:
Can you come up with an algorithm that runs in O(m + n) time?
*/


// //Approach 1 -> Two Pointers with extra space
// function mergeTwoSortedArray(nums1, m , nums2 , n) {
//     let p1 = 0;
//     let p2 = 0;
//     // Create a copy of the initial m elements of nums1
//     // This is important because nums1 will be modified in place starting from index 0.
//     let nums1Copy = nums1.slice(0,m); 

//     // Iterate through all m+n positions in nums1
//     for(let i = 0; i < m + n; i += 1) {
//         // Condition to decide whether to pick from nums1Copy or nums2
//         // Take from nums1Copy if:
//         // 1. All elements from nums2 have been merged (p2 >= n)
//         // OR
//         // 2. There are still elements in nums1Copy (p1 < m) AND
//         //    the current element in nums1Copy is smaller than the current element in nums2
//         if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//             nums1[i] = nums1Copy[p1];
//             p1 += 1; // Move to the next element in nums1Copy
//         } else {
//             // Otherwise, take from nums2 (either nums1Copy is exhausted or nums2's element is smaller/equal)
//             nums1[i] = nums2[p2];
//             p2++; // Move to the next element in nums2
//         }
//     }
//     // The problem states to modify nums1 in-place and not return anything.
//     // However, for testing locally with console.log, returning nums1 makes it easy to inspect.
//     // When submitting to LeetCode, ensure the function signature matches exactly (void return).
//     return nums1; 
// }

function mergeTwoSortedArray(nums1 , m , nums2 , n) {
    let p1 = m-1;
    let p2 = n-1;
    for(let i = m+n-1 ; i>=0;i--) {
        if()
    }
}

// --- Test Cases ---

console.log("--- Test Case 1: LeetCode Example 1 ---");
let nums1_ex1 = [1, 2, 3, 0, 0, 0];
let m_ex1 = 3;
let nums2_ex1 = [2, 5, 6];
let n_ex1 = 3;
// Expected Output: [1, 2, 2, 3, 5, 6]
console.log("Input nums1:", JSON.stringify(nums1_ex1));
console.log("Input m:", m_ex1);
console.log("Input nums2:", JSON.stringify(nums2_ex1));
console.log("Input n:", n_ex1);
let result1 = mergeTwoSortedArray(nums1_ex1, m_ex1, nums2_ex1, n_ex1);
console.log("Output nums1:", JSON.stringify(result1));
console.log("Expected Output:", JSON.stringify([1, 2, 2, 3, 5, 6]));
console.log("Test 1 Passed:", JSON.stringify(result1) === JSON.stringify([1, 2, 2, 3, 5, 6]));
console.log("---------------------------------------\n");


console.log("--- Test Case 2: LeetCode Example 2 ---");
let nums1_ex2 = [1];
let m_ex2 = 1;
let nums2_ex2 = [];
let n_ex2 = 0;
// Expected Output: [1]
console.log("Input nums1:", JSON.stringify(nums1_ex2));
console.log("Input m:", m_ex2);
console.log("Input nums2:", JSON.stringify(nums2_ex2));
console.log("Input n:", n_ex2);
let result2 = mergeTwoSortedArray(nums1_ex2, m_ex2, nums2_ex2, n_ex2);
console.log("Output nums1:", JSON.stringify(result2));
console.log("Expected Output:", JSON.stringify([1]));
console.log("Test 2 Passed:", JSON.stringify(result2) === JSON.stringify([1]));
console.log("---------------------------------------\n");


console.log("--- Test Case 3: LeetCode Example 3 ---");
let nums1_ex3 = [0];
let m_ex3 = 0;
let nums2_ex3 = [1];
let n_ex3 = 1;
// Expected Output: [1]
console.log("Input nums1:", JSON.stringify(nums1_ex3));
console.log("Input m:", m_ex3);
console.log("Input nums2:", JSON.stringify(nums2_ex3));
console.log("Input n:", n_ex3);
let result3 = mergeTwoSortedArray(nums1_ex3, m_ex3, nums2_ex3, n_ex3);
console.log("Output nums1:", JSON.stringify(result3));
console.log("Expected Output:", JSON.stringify([1]));
console.log("Test 3 Passed:", JSON.stringify(result3) === JSON.stringify([1]));
console.log("---------------------------------------\n");


console.log("--- Test Case 4: nums2 elements are all smaller ---");
let nums1_ex4 = [7, 8, 9, 0, 0, 0];
let m_ex4 = 3;
let nums2_ex4 = [1, 2, 3];
let n_ex4 = 3;
// Expected Output: [1, 2, 3, 7, 8, 9]
console.log("Input nums1:", JSON.stringify(nums1_ex4));
console.log("Input m:", m_ex4);
console.log("Input nums2:", JSON.stringify(nums2_ex4));
console.log("Input n:", n_ex4);
let result4 = mergeTwoSortedArray(nums1_ex4, m_ex4, nums2_ex4, n_ex4);
console.log("Output nums1:", JSON.stringify(result4));
console.log("Expected Output:", JSON.stringify([1, 2, 3, 7, 8, 9]));
console.log("Test 4 Passed:", JSON.stringify(result4) === JSON.stringify([1, 2, 3, 7, 8, 9]));
console.log("---------------------------------------\n");


console.log("--- Test Case 5: nums1 elements are all smaller ---");
let nums1_ex5 = [1, 2, 3, 0, 0, 0];
let m_ex5 = 3;
let nums2_ex5 = [4, 5, 6];
let n_ex5 = 3;
// Expected Output: [1, 2, 3, 4, 5, 6]
console.log("Input nums1:", JSON.stringify(nums1_ex5));
console.log("Input m:", m_ex5);
console.log("Input nums2:", JSON.stringify(nums2_ex5));
console.log("Input n:", n_ex5);
let result5 = mergeTwoSortedArray(nums1_ex5, m_ex5, nums2_ex5, n_ex5);
console.log("Output nums1:", JSON.stringify(result5));
console.log("Expected Output:", JSON.stringify([1, 2, 3, 4, 5, 6]));
console.log("Test 5 Passed:", JSON.stringify(result5) === JSON.stringify([1, 2, 3, 4, 5, 6]));
console.log("---------------------------------------\n");


console.log("--- Test Case 6: Empty nums1 (m=0) ---");
let nums1_ex6 = [0, 0, 0, 0];
let m_ex6 = 0;
let nums2_ex6 = [1, 2, 3, 4];
let n_ex6 = 4;
// Expected Output: [1, 2, 3, 4]
console.log("Input nums1:", JSON.stringify(nums1_ex6));
console.log("Input m:", m_ex6);
console.log("Input nums2:", JSON.stringify(nums2_ex6));
console.log("Input n:", n_ex6);
let result6 = mergeTwoSortedArray(nums1_ex6, m_ex6, nums2_ex6, n_ex6);
console.log("Output nums1:", JSON.stringify(result6));
console.log("Expected Output:", JSON.stringify([1, 2, 3, 4]));
console.log("Test 6 Passed:", JSON.stringify(result6) === JSON.stringify([1, 2, 3, 4]));
console.log("---------------------------------------\n");


console.log("--- Test Case 7: Empty nums2 (n=0) ---");
let nums1_ex7 = [5, 6, 7];
let m_ex7 = 3;
let nums2_ex7 = [];
let n_ex7 = 0;
// Expected Output: [5, 6, 7]
console.log("Input nums1:", JSON.stringify(nums1_ex7));
console.log("Input m:", m_ex7);
console.log("Input nums2:", JSON.stringify(nums2_ex7));
console.log("Input n:", n_ex7);
let result7 = mergeTwoSortedArray(nums1_ex7, m_ex7, nums2_ex7, n_ex7);
console.log("Output nums1:", JSON.stringify(result7));
console.log("Expected Output:", JSON.stringify([5, 6, 7]));
console.log("Test 7 Passed:", JSON.stringify(result7) === JSON.stringify([5, 6, 7]));
console.log("---------------------------------------\n");


console.log("--- Test Case 8: Duplicate values across arrays ---");
let nums1_ex8 = [1, 1, 3, 0, 0];
let m_ex8 = 3;
let nums2_ex8 = [1, 2];
let n_ex8 = 2;
// Expected Output: [1, 1, 1, 2, 3]
console.log("Input nums1:", JSON.stringify(nums1_ex8));
console.log("Input m:", m_ex8);
console.log("Input nums2:", JSON.stringify(nums2_ex8));
console.log("Input n:", n_ex8);
let result8 = mergeTwoSortedArray(nums1_ex8, m_ex8, nums2_ex8, n_ex8);
console.log("Output nums1:", JSON.stringify(result8));
console.log("Expected Output:", JSON.stringify([1, 1, 1, 2, 3]));
console.log("Test 8 Passed:", JSON.stringify(result8) === JSON.stringify([1, 1, 1, 2, 3]));
console.log("---------------------------------------\n");