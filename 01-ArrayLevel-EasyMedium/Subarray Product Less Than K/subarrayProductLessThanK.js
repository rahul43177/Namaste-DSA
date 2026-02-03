/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {

    // Edge case:
    // If k <= 1, no positive product can be < k
    if (k <= 1) return 0;

    let left = 0;          // left boundary of the window
    let product = 1;       // product of elements in current window
    let count = 0;         // total number of valid subarrays

    // right expands the window
    for (let right = 0; right < nums.length; right++) {

        // STEP 1: include nums[right] in the window
        product *= nums[right];

        // STEP 2: shrink window until product < k
        // If product becomes too big, move left forward
        while (product >= k) {
            product /= nums[left];
            left++;
        }

        // STEP 3: count valid subarrays ending at 'right'
        // All subarrays:
        // [left … right], [left+1 … right], ..., [right … right]
        count += (right - left + 1);
    }

    return count;
}
