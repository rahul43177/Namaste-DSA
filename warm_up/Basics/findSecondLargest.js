function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
        return -1;
    }

    let largest = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }

    // handle the case where the largest number is the only number in the array
    if (second === -Infinity) {
        return -1;
    }

    return second;
}