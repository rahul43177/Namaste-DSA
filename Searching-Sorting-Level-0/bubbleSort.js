function bubbleSort(arr) {
    let n = arr.length; 
    for(let i = 0;i<n-1;i+=1) {
        let swapped = false; // Flag to track if any swapping occurred in this pass
        for(let j = 0;j<n-1-i;j+=1) {
            if(arr[j] > arr[j+1]) {
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]] //swapping in es6 , otherwise we can use temp variable method
                swapped = true; // Set flag to true when swap occurs
            }
        }
        // If no swapping occurred in this pass, array is already sorted
        if(!swapped) {
            break; // Exit early - optimization for already sorted arrays
        }
    }
    return arr; 
}



/*
BUBBLE SORT ALGORITHM EXPLANATION:

How it works:
1. Compare adjacent elements in the array
2. If the left element is greater than the right element, swap them
3. Continue this process through the entire array
4. After each complete pass, the largest element "bubbles up" to its correct position at the end
5. Repeat until the array is fully sorted

Loop Conditions Explained:

Outer Loop: for(let i = 0; i < n-1; i++)
- Runs (n-1) times because after (n-1) passes, the array will be sorted
- Each pass places one element in its final sorted position
- We don't need the nth pass because the last element will already be in place

Inner Loop: for(let j = 0; j < n-1-i; j++)
- Compares adjacent elements: arr[j] and arr[j+1]
- Stops at (n-1-i) because:
  * We need to access arr[j+1], so j can't be the last index
  * After 'i' passes, the last 'i' elements are already sorted
  * No need to check already sorted elements

Example walkthrough with [5, 2, 4, 1, 3]:
Pass 1 (i=0): [5,2,4,1,3] → [2,5,4,1,3] → [2,4,5,1,3] → [2,4,1,5,3] → [2,4,1,3,5]
Pass 2 (i=1): [2,4,1,3,5] → [2,4,1,3,5] → [2,1,4,3,5] → [2,1,3,4,5]
Pass 3 (i=2): [2,1,3,4,5] → [1,2,3,4,5] → [1,2,3,4,5]
Pass 4 (i=3): [1,2,3,4,5] → [1,2,3,4,5]

Time Complexity: 
- Worst Case: O(n²) - when array is reverse sorted
- Best Case: O(n) - when array is already sorted (with optimization)
- Average Case: O(n²)
Space Complexity: O(1) - sorting in place

OPTIMIZATION ADDED:
- Uses a 'swapped' flag to detect if any swaps occurred in a pass
- If no swaps happen, the array is already sorted and we can exit early
- This improves best-case time complexity from O(n²) to O(n)
- Particularly useful for nearly sorted or already sorted arrays
*/

let arr = [5, 2, 4, 1, 3]
console.log("Before Array :",arr);
let sortedArray = bubbleSort(arr);
console.log("Sorted Array :", sortedArray );

