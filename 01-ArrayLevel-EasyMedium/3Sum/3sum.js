function threeSum(nums) {

    // STEP 1: SORT THE ARRAY
    // --------------------------------------------------
    // Why sorting?
    // 1. Two-pointer technique ONLY works on sorted arrays
    // 2. Sorting helps us:
    //    - move pointers intelligently (increase/decrease sum)
    //    - easily skip duplicates
    nums.sort((a, b) => a - b);

    // This will store all UNIQUE triplets that sum to 0
    const res = [];

    // Length of array (used multiple times)
    const n = nums.length;

    // STEP 2: FIX ONE NUMBER (ANCHOR)
    // --------------------------------------------------
    // We iterate through the array and fix nums[i]
    // For each fixed nums[i], we try to find TWO numbers
    // to the right of i such that:
    // nums[i] + nums[left] + nums[right] == 0
    for (let i = 0; i < n; i++) {

        // SKIP DUPLICATE ANCHORS
        // --------------------------------------------------
        // If nums[i] is the same as the previous anchor,
        // then all triplets formed with it will be duplicates
        // So we skip it to avoid repeating results
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // STEP 3: TWO POINTERS SETUP
        // --------------------------------------------------
        // left starts just after i
        // right starts from the end of the array
        let left = i + 1;
        let right = n - 1;

        // We want:
        // nums[left] + nums[right] = -nums[i]
        // This converts 3Sum into a 2Sum problem
        const target = -nums[i];

        // STEP 4: TWO POINTER SEARCH
        // --------------------------------------------------
        // We move left and right until they cross
        while (left < right) {

            // Current sum of the two pointers
            const sum = nums[left] + nums[right];

            // CASE 1: FOUND A VALID TRIPLET
            if (sum === target) {

                // Push the triplet into result
                res.push([nums[i], nums[left], nums[right]]);

                // Move BOTH pointers
                // Why both?
                // Because this exact pair is already used
                left++;
                right--;

                // SKIP DUPLICATES FOR LEFT POINTER
                // --------------------------------------------------
                // If the new left value is the same as previous,
                // it will generate the same triplet again
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // SKIP DUPLICATES FOR RIGHT POINTER
                // --------------------------------------------------
                // Same logic as left, but from the right side
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            // CASE 2: SUM IS TOO SMALL
            } else if (sum < target) {

                // Since array is sorted,
                // moving left to the right increases the sum
                left++;

            // CASE 3: SUM IS TOO LARGE
            } else {

                // Since array is sorted,
                // moving right to the left decreases the sum
                right--;
            }
        }
    }

    // STEP 5: RETURN ALL UNIQUE TRIPLETS
    return res;
}
