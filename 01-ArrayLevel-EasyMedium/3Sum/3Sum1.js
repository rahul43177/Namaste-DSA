function threeSum(nums) {
    //sort the array first 
    nums.sort((a,b) => a-b)

    let n = nums.length; 
    let res = []; //empty result 

    for(let i = 0;i<n;i++) {
        if(i>0 && nums[i] == nums[i-1]) continue; //previous i was also same -- then duplicate and skip this loop using continue 

        let left = i+1; 
        let right = n-1; 
        let target = -nums[i]
        while(left < right) {
            let s= nums[left] + nums[right]; 

            if(s == target) {
                res.push([nums[i] , nums[left] , nums[right]]); 
                left+=1 ;
                right-=1; 


                while(left < right && nums[left] == nums[left-1]) left+=1 ; 
                while(left < right && nums[right] == nums[right+1]) right-=1; 
            } else if(s < target) {
                left+=1 ; 
            } else {
                right-=1 ; 
            }
        }
    }
    return res; 
}

let nums =  [-1,0,1,2,-1,-4]
console.log(threeSum(nums))