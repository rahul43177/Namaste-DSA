/* 
LeetCode Easy: Reverse String

Write a function that reverses a string. 
The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with O(1) extra memory.

Example:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

function reverseString(array) {
    let n = array.length;
    let half = Math.floor(n/2);
    for(let i = 0;i<half;i+=1) {
        let temp = array[i];
        array[i] = array[n-i-1];
        array[n-i-1] = temp;
    }
    console.log(array)
}