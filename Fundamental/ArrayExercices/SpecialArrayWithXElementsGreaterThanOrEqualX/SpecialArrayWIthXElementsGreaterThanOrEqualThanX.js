/* 
@param {number[]} nums
@return {number}
*/
var specialArray = function(nums) {
 
    nums = nums.sort((a,b)=>a-b)
    const n = nums.length
    
    let l = 0
    let r = n-1
    while(l<=r){
        let mid = l + ((r-l)>>1)
        let x = n-mid
        if(nums[mid]>=x && (mid===0 || nums[mid-1] < x))
            return x
        else if(nums[mid]>x)
            r = mid - 1
        else
            l = mid + 1
    }
    return -1
 };