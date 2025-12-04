function findSecondLargest(arr) {
    // Initialize largestNumber to negative infinity.
    // This ensures any number in the array will be greater than it initially.
    let largestNumber = -Infinity;
    // Initialize secondLargestNumber to negative infinity.
    // This will hold the second largest value found.
    let secondLargestNumber = -Infinity;

    // --- Edge Case Handling ---
    // Check if the array is empty.
    if (arr.length === 0) {
        // Return an error message if the array has no elements.
        // Note: The message "Array can't be negative" seems like a typo and should probably be "Array can't be empty."
        return `Array can't be empty.`; // Corrected message
    }
    // Check if the array has only one element.
    if (arr.length === 1) {
        // Return an error message as a second largest cannot be found in a single-element array.
        return `Array should have at least 2 elements.`;
    }

    // --- Finding the Largest and Second Largest ---
    // Iterate through each element of the array.
    for (let i = 0; i < arr.length; i += 1) {
        // Check if the current element is greater than the current largestNumber.
        if (arr[i] > largestNumber) {
            // If it is, the current largestNumber becomes the secondLargestNumber.
            secondLargestNumber = largestNumber;
            // And the current element becomes the new largestNumber.
            largestNumber = arr[i];
        }
        // Else, if the current element is not equal to the largestNumber (to handle duplicates)
        // AND the current element is greater than the current secondLargestNumber.
        else if (arr[i] !== largestNumber && arr[i] > secondLargestNumber) {
            // Then, the current element becomes the new secondLargestNumber.
            secondLargestNumber = arr[i];
        }
    }

    // --- Return Result ---
    // After iterating through the whole array,
    // if secondLargestNumber is still -Infinity, it means no second largest was found
    // (e.g., all elements are the same, or array had issues not caught above).
    // Otherwise, it holds the second largest value.
    if (secondLargestNumber === -Infinity) {
        return `No second largest element found.` // Or handle as per specific requirements, e.g., all elements are same.
    }
    return secondLargestNumber;
}

// --- Example Usage ---
// Define an array of numbers to test the function.
const numbers1 = [10, 5, 20, 8, 20, 15];
// Call the function to find the second largest number.
const second1 = findSecondLargest(numbers1);
// Log the result to the console.
console.log(`Second largest number in array [${numbers1}] is: ${second1}`); // Expected: 15

const numbers2 = [5, 5, 5, 5];
const second2 = findSecondLargest(numbers2);
console.log(`Second largest number in array [${numbers2}] is: ${second2}`); // Expected: No second largest element found.

const numbers3 = [10];
const second3 = findSecondLargest(numbers3);
console.log(`Second largest number in array [${numbers3}] is: ${second3}`); // Expected: Array should have at least 2 elements.

const numbers4 = [];
const second4 = findSecondLargest(numbers4);
console.log(`Second largest number in array [${numbers4}] is: ${second4}`); // Expected: Array can't be empty.

const numbers5 = [10, 20];
const second5 = findSecondLargest(numbers5);
console.log(`Second largest number in array [${numbers5}] is: ${second5}`); // Expected: 10

const numbers6 = [20, 10];
const second6 = findSecondLargest(numbers6);
console.log(`Second largest number in array [${numbers6}] is: ${second6}`); // Expected: 10