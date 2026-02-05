function subArrayProductLessThanK(nums , k) {
    let left = 0;
    let product = 1; 
    let count = 0;

    for(let right = 0;right<nums.length;right+=1) {
        product += nums[right]; 

        while(product>=nums[left]) {
            product /= nums[left]; 
            left++;
        }

        count += (right-left+1); 
    }
    return count ; 
}