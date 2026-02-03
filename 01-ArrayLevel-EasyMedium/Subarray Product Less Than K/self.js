function numSubarrayProductLessThanK(nums , k) {
    let left = 0;
    let product = 1; 
    let count = 0; 

    for(let right = 0;right<nums.length;right+=1){
        product = product * nums[right]; 
     
        while(product >= k) {
            product = product / nums[left]; 
            left++; 
        }

        count = count + (right-left+1); 
    }
    return count ; 
}