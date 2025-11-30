/* 
LeetCode Easy: Reverse String

Write a function that reverses a string. 
The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with O(1) extra memory.

Example:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/*
Explanation:
- We swap the first and last elements, then the second and second-last, and so on.
- Only need to iterate till the middle of the array.
- For index i, swap with index n - i - 1.
- This is done in-place with O(1) extra memory.

Example:
Input:  ["r", "a", "h", "u", "l"]
Indexes:  0    1    2    3    4
Swap:     0<->4, 1<->3
Result:  ["l", "u", "h", "a", "r"]
*/

function reverseString(arr) {
    let n = arr.length;
    let half = Math.floor(n / 2);
    for (let i = 0; i < half; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
    return arr;
}

let stringArray = ["r", "a", "h", "u", "l"];
let reversed = reverseString(stringArray);
console.log("Reversed:", reversed);
