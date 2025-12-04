/**
 * Selection Sort (Ascending/Descending)
 *
 * Problem Overview:
 * Implement the Selection Sort algorithm in JavaScript to sort a given array
 * in either ascending or descending order based on the input parameter.
 *
 * The algorithm works by dividing the array into a sorted and an unsorted part.
 * It repeatedly selects the minimum (or maximum) element from the unsorted part
 * and moves it to the correct position in the sorted part.
 *
 * Function Parameters:
 * @param {number[]} arr - The array of numbers to be sorted.
 * @param {string} sort - The sorting order: 'asc' for ascending or 'desc' for descending (default: 'asc').
 *
 * Returns:
 * @returns {number[]} - The sorted array based on the selected order.
 *
 * Constraints:
 * - The function should not use built-in sort methods.
 * - Sorting should be done in-place.
 * - Must handle both ascending and descending sorting using the same function.
 *
 * Example:
 * selectionSort([5, 2, 8, 3, 1], 'asc') ➞ [1, 2, 3, 5, 8]
 * selectionSort([5, 2, 8, 3, 1], 'desc') ➞ [8, 5, 3, 2, 1]
 */

function selectionSort(arr , sort = 'asc') {
    let n = arr.length; 
    for(let i = 0;i<n-1;i++) {
        let idx = i;
        for(let j = i+1;j<n;j++) {
            if( (sort == 'asc' && arr[j] < arr[idx]) || (sort == 'desc' && arr[j] > arr[idx])) {
                idx = j;
            }
        }
        
        //checking if we found and swapping is required ? 
        if(idx !== i) {
            [arr[idx] , arr[i]] = [arr[i] , arr[idx]]; 
        }
    }
    return arr ;
}
//BASIC TEST CASES-- 
// Ascending
console.log(selectionSort([5, 2, 8, 3, 1], 'asc'));   
// ➞ [1, 2, 3, 5, 8]
// Descending
console.log(selectionSort([5, 2, 8, 3, 1], 'desc'));  
// ➞ [8, 5, 3, 2, 1]

//WITH DUPLICATES
console.log(selectionSort([4, 2, 4, 1, 3], 'asc'));  
// ➞ [1, 2, 3, 4, 4]
console.log(selectionSort([4, 2, 4, 1, 3], 'desc')); 
// ➞ [4, 4, 3, 2, 1]

//ALREADY SORTED
console.log(selectionSort([1, 2, 3, 4, 5], 'asc'));   
// ➞ [1, 2, 3, 4, 5]
console.log(selectionSort([5, 4, 3, 2, 1], 'desc'));  
// ➞ [5, 4, 3, 2, 1]

//ALL ELEMENTS SAME 
console.log(selectionSort([7, 7, 7, 7], 'asc'));     
// ➞ [7, 7, 7, 7]
console.log(selectionSort([7, 7, 7, 7], 'desc'));    
// ➞ [7, 7, 7, 7]


//EXPLANATION 
// This function sorts an array using the Selection Sort algorithm.
// It works by finding the minimum (or maximum) element from the unsorted part
// of the array and placing it at the correct position in each iteration.
// You can choose the order of sorting by passing 'asc' for ascending or 'desc' for descending.
