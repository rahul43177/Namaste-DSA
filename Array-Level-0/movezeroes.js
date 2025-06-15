/**
 * LeetCode - Move Zeroes (Easy)
 * 
 * 🟣 Description:
 * Given an array of integers `nums`, move all zeros in the array to the end while maintaining the relative order of non-zero elements.
 * 
 * ⚪ Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * 🟣 Notes:
 * - You must do this **in place**, without making a copy of the array.
 * - The relative order of non-zero elements should stay the same.
 * 
 * 🟣 Approach (Tip):
 * - Keep a `lastNonZeroIndex`.
 * - Loop through `nums`. Whenever you find a non-zero, swap it with `lastNonZeroIndex` and then increment `lastNonZeroIndex`.
 * - At the end, all zeros will be pushed toward the back of the array.
 */

// function moveZeroes(array) {
//     let placeHolder = 0;
//     for(let i = 0;i<array.length;i+=1) {
//         if(array[i] != 0) {
//             [array[i] , array[placeHolder]] = [array[placeHolder] , array[i]];
//             placeHolder++;
//         }
//     }
//     return array ; 
// }

function moveZeroes(arr) {
    let x = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] != 0) {
            arr[x] = arr[i] ; 
            x+=1 ;
        }
    }

    for(let i = x;i<arr.length;i+=1) {
        arr[i] = 0;
    }
    return arr; 
}
// --- Test Cases for moveZeroes ---

// --- Test Case 1: LeetCode Example --- 
console.log("--- Test Case 1: LeetCode Example ---");
let arr1 = [0, 1, 0, 3, 12];
console.log("Input arr :", JSON.stringify(arr1)); 
moveZeroes(arr1);
console.log("Output arr :", JSON.stringify(arr1)); 
console.log("Expected :", JSON.stringify([1, 3, 12, 0, 0]));
console.log("Test 1 Passed :", JSON.stringify(arr1) === JSON.stringify([1, 3, 12, 0, 0]));
console.log("-----------------------------------------\n");

// --- Test Case 2: All zeros --- 
console.log("--- Test Case 2: All zeros ---");
let arr2 = [0, 0, 0, 0];
console.log("Input arr :", JSON.stringify(arr2)); 
moveZeroes(arr2);
console.log("Output arr :", JSON.stringify(arr2)); 
console.log("Expected :", JSON.stringify([0, 0, 0, 0]));
console.log("Test 2 Passed :", JSON.stringify(arr2) === JSON.stringify([0, 0, 0, 0]));
console.log("-----------------------------------------\n");

// --- Test Case 3: All non-zeros --- 
console.log("--- Test Case 3: All non-zeros ---");
let arr3 = [1, 2, 3, 4, 5];
console.log("Input arr :", JSON.stringify(arr3)); 
moveZeroes(arr3);
console.log("Output arr :", JSON.stringify(arr3)); 
console.log("Expected :", JSON.stringify([1, 2, 3, 4, 5]));
console.log("Test 3 Passed :", JSON.stringify(arr3) === JSON.stringify([1, 2, 3, 4, 5]));
console.log("-----------------------------------------\n");

// --- Test Case 4: Zeros at the start --- 
console.log("--- Test Case 4: Zeros at the start ---");
let arr4 = [0, 0, 1, 2, 3];
console.log("Input arr :", JSON.stringify(arr4)); 
moveZeroes(arr4);
console.log("Output arr :", JSON.stringify(arr4)); 
console.log("Expected :", JSON.stringify([1, 2, 3, 0, 0]));
console.log("Test 4 Passed :", JSON.stringify(arr4) === JSON.stringify([1, 2, 3, 0, 0]));
console.log("-----------------------------------------\n");

// --- Test Case 5: Zeros at the end --- 
console.log("--- Test Case 5: Zeros at the end ---");
let arr5 = [1, 2, 3, 0, 0];
console.log("Input arr :", JSON.stringify(arr5)); 
moveZeroes(arr5);
console.log("Output arr :", JSON.stringify(arr5)); 
console.log("Expected :", JSON.stringify([1, 2, 3, 0, 0]));
console.log("Test 5 Passed :", JSON.stringify(arr5) === JSON.stringify([1, 2, 3, 0, 0]));
console.log("-----------------------------------------\n");

// --- Test Case 6: Alternate zeros --- 
console.log("--- Test Case 6: Alternate zeros ---");
let arr6 = [0, 1, 0, 2, 0, 3];
console.log("Input arr :", JSON.stringify(arr6)); 
moveZeroes(arr6);
console.log("Output arr :", JSON.stringify(arr6)); 
console.log("Expected :", JSON.stringify([1, 2, 3, 0, 0, 0]));
console.log("Test 6 Passed :", JSON.stringify(arr6) === JSON.stringify([1, 2, 3, 0, 0, 0]));
console.log("-----------------------------------------\n");

// --- Test Case 7: Single element (0) --- 
console.log("--- Test Case 7: Single element (0) ---");
let arr7 = [0];
console.log("Input arr :", JSON.stringify(arr7)); 
moveZeroes(arr7);
console.log("Output arr :", JSON.stringify(arr7)); 
console.log("Expected :", JSON.stringify([0]));
console.log("Test 7 Passed :", JSON.stringify(arr7) === JSON.stringify([0]));
console.log("-----------------------------------------\n");

// --- Test Case 8: Single element (Non-zero) --- 
console.log("--- Test Case 8: Single element (Non-zero) ---");
let arr8 = [5];
console.log("Input arr :", JSON.stringify(arr8)); 
moveZeroes(arr8);
console.log("Output arr :", JSON.stringify(arr8)); 
console.log("Expected :", JSON.stringify([5]));
console.log("Test 8 Passed :", JSON.stringify(arr8) === JSON.stringify([5]));
console.log("-----------------------------------------\n");