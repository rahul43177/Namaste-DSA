def threeSum(nums):
    #sorting 
    nums.sort()

    n = len(nums)
    res = []

    for i in range(n) :
        if i > 0 and nums[i] == nums[i-1] :
            continue 
        target = -nums[i]
        left = i+1 
        right = n-1 
        while(left < right) :
            sum = nums[left] + nums[right]
            if sum == target:
                res.append([nums[i] , nums[left] , nums[right]])
                left+=1 
                right-=1 

                while(left < right and nums[left] == nums[left-1])  : left+=1 
                while(left < right and nums[right] == nums[right+1]) : right-=1 
            elif sum < target : 
                left+=1 
            else : 
                right-=1 
    return res 

nums = [-1,0,1,2,-1,-4]
print(threeSum(nums))

                
                    
            
            