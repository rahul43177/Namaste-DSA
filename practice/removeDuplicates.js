/**
 * Given a sorted array, remove duplicates in-place such that each element appears only once
 * and return the new length of the array containing unique elements.
 *
 * @param {number[]} arr The sorted input array.
 * @returns {number} The number of unique elements.
 */
function removeDuplicates(arr) {
    // If the array is empty, there are no unique elements.
    if (arr.length === 0) {
        return 0;
    }

    let j = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] > arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    // The number of unique elements is the index of the last unique element + 1.
    return j + 1;
}

let array = [0,0,1,1,1,2,2,3,3];
const k = removeDuplicates(array);
console.log(`Number of unique elements: ${k}`);
console.log(`Modified array (first ${k} elements): ${array.slice(0, k)}`);
console.log(`Full modified array: ${array}`);