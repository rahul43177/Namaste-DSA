/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    // STEP 1: Sort the array
    // ------------------------------------------------
    // Why?
    // - Two pointers only work on sorted arrays
    // - Sorting allows us to move left/right intelligently
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // STEP 2: Initialize closest sum
    // ------------------------------------------------
    // We MUST start with some valid triplet
    // Using the first 3 elements is safe and standard
    let closestSum = nums[0] + nums[1] + nums[2];

    // STEP 3: Fix the first number (anchor)
    // ------------------------------------------------
    // We stop at n - 2 because we need room for:
    // - left pointer
    // - right pointer
    for (let i = 0; i < n - 2; i++) {

        // OPTIONAL optimization:
        // Skip duplicate anchors to avoid repeated work
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // STEP 4: Set up two pointers
        let left = i + 1;
        let right = n - 1;

        // STEP 5: Two pointer search
        while (left < right) {

            // Current sum using anchor + two pointers
            const currentSum = nums[i] + nums[left] + nums[right];

            // STEP 6: Update closest sum if better
            // ------------------------------------------------
            // We compare DISTANCES, not values
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // STEP 7: Move pointers
            // ------------------------------------------------
            // If sum is too small → increase it
            if (currentSum < target) {
                left++;

            // If sum is too large → decrease it
            } else if (currentSum > target) {
                right--;

            // Exact match → best possible answer
            // Distance = 0 → cannot improve
            } else {
                return currentSum;
            }
        }
    }

    // STEP 8: Return the closest sum found
    return closestSum;
};
