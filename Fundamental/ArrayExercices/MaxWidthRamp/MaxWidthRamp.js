/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let maxWidth = 0;
    for(let i=0; i<nums.length; i++){
        let j = nums.length - 1;
        while(j > i && nums[j] < nums[i]){
            j--;
        }
        maxWidth = Math.max(maxWidth, j-i);
    }
    return maxWidth;
};