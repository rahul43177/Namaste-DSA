function threeSum(nums) {
    //sort 
    nums.sort((a,b) => a-b); 
    const n = nums.length; 
    const res = [] ; 

    //iterating through i 
    for(let i = 0;i<n;i++) {
        //checking for the duplicate i after 0 index and if same skipping it 
        if(i>0 && nums[i] == nums[i+1]) continue; //skip this iteration and go to i 

        let target = -nums[i]; 
        let left = i+1; 
        let right = n-1; 
        while(left < right) {
            let sum = nums[left] + nums[right]; 
            if(sum === target) {
                res.push([nums[i] , nums[left] , nums[right]]); 
                left++; 
                right--; 


                //skipping duplicates for left pointer ; 
                while(left < right && nums[left] == nums[left-1]) left++; 
                //skipping duplicates for right pointer ; 
                while(left < right && nums[right] == nums[right-1]) right--; 
            } else if(sum < target) {
                left++; 
            } else {
                right--; 
            }
        }
    }
    return res; 
}

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums)); 