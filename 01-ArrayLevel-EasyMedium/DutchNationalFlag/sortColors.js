function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid<=high) {
        //first if mid == 0 --> we need to shift it to left by swapping it with low 
        if(nums[mid] == 0) {
            [nums[low] , nums[mid]] = [nums[mid] , nums[low]]; //swapping 
            low++;
            mid++; 
        } else if(nums[mid] == 1) {
            mid++; 
        } else {
            [nums[high] , nums[mid] ] = [nums[mid] , nums[high]]; 
            high--; 
        }
    }
    return nums; 
}

const arr = [1,0]; 
console.log(sortColors(arr)); 