# Binary Search - Dry Run Analysis

## Algorithm Overview
Binary Search is a divide-and-conquer algorithm that finds a target value in a sorted array by repeatedly dividing the search interval in half.

## Code Structure
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(arr[middle] == target) return middle;
        else if(arr[middle] > target) {
            right = middle - 1;
        } else if(arr[middle] < target) {
            left = middle + 1;
        }
    }
    return -1;
}
```

## Dry Run Examples

### Test Case 1: Target Found
**Input:** `arr = [-1, 0, 3, 5, 9, 12]`, `target = 9`
**Expected Output:** `4`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 5     | -      | -           | -          | Setup pointers |
| 1         | 0    | 5     | 2      | 3           | 3 < 9      | left = middle + 1 = 3 |
| 2         | 3    | 5     | 4      | 9           | 9 == 9     | **Return 4** |

**Result:** Found at index 4 ✅

### Test Case 2: Target Not Found
**Input:** `arr = [-1, 0, 3, 5, 9, 12]`, `target = 2`
**Expected Output:** `-1`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 5     | -      | -           | -          | Setup pointers |
| 1         | 0    | 5     | 2      | 3           | 3 > 2      | right = middle - 1 = 1 |
| 2         | 0    | 1     | 0      | -1          | -1 < 2     | left = middle + 1 = 1 |
| 3         | 1    | 1     | 1      | 0           | 0 < 2      | left = middle + 1 = 2 |
| 4         | 2    | 1     | -      | -           | left > right | **Exit loop** |

**Result:** Return -1 (not found) ✅

### Test Case 3: First Element
**Input:** `arr = [-1, 0, 3, 5, 9, 12]`, `target = -1`
**Expected Output:** `0`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 5     | -      | -           | -          | Setup pointers |
| 1         | 0    | 5     | 2      | 3           | 3 > -1     | right = middle - 1 = 1 |
| 2         | 0    | 1     | 0      | -1          | -1 == -1   | **Return 0** |

**Result:** Found at index 0 ✅

### Test Case 4: Last Element
**Input:** `arr = [-1, 0, 3, 5, 9, 12]`, `target = 12`
**Expected Output:** `5`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 5     | -      | -           | -          | Setup pointers |
| 1         | 0    | 5     | 2      | 3           | 3 < 12     | left = middle + 1 = 3 |
| 2         | 3    | 5     | 4      | 9           | 9 < 12     | left = middle + 1 = 5 |
| 3         | 5    | 5     | 5      | 12          | 12 == 12   | **Return 5** |

**Result:** Found at index 5 ✅

### Test Case 5: Single Element - Found
**Input:** `arr = [5]`, `target = 5`
**Expected Output:** `0`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 0     | -      | -           | -          | Setup pointers |
| 1         | 0    | 0     | 0      | 5           | 5 == 5     | **Return 0** |

**Result:** Found at index 0 ✅

### Test Case 6: Single Element - Not Found
**Input:** `arr = [5]`, `target = 3`
**Expected Output:** `-1`

| Iteration | left | right | middle | arr[middle] | Comparison | Action |
|-----------|------|-------|--------|-------------|------------|--------|
| Initial   | 0    | 0     | -      | -           | -          | Setup pointers |
| 1         | 0    | 0     | 0      | 5           | 5 > 3      | right = middle - 1 = -1 |
| 2         | 0    | -1    | -      | -           | left > right | **Exit loop** |

**Result:** Return -1 (not found) ✅

## Key Observations

1. **Loop Condition**: `while(left <= right)` ensures we don't miss single-element cases
2. **Middle Calculation**: `Math.floor((left + right) / 2)` handles odd/even array lengths
3. **Pointer Updates**: 
   - `right = middle - 1` when target is smaller
   - `left = middle + 1` when target is larger
4. **Termination**: Loop exits when `left > right` (search space exhausted)

## Complexity Analysis

- **Time Complexity**: O(log n) - search space halved each iteration
- **Space Complexity**: O(1) - only uses constant extra variables

## Algorithm Flow

```
Start with full array
    ↓
Calculate middle index
    ↓
Compare arr[middle] with target
    ↓
┌─────────────────┬─────────────────┬─────────────────┐
│   arr[middle]   │   arr[middle]   │   arr[middle]   │
│   == target     │   > target      │   < target      │
│                 │                 │                 │
│   Return middle │   Search left   │   Search right  │
│                 │   half          │   half          │
└─────────────────┴─────────────────┴─────────────────┘
    ↓                 ↓                 ↓
   Found          right = middle-1   left = middle+1
                      ↓                 ↓
                  Continue loop     Continue loop
```

The algorithm efficiently narrows down the search space by eliminating half of the remaining elements in each iteration, making it much faster than linear search for large sorted arrays.