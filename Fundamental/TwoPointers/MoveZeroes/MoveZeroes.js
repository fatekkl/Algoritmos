/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] === 0) {
            const index = nums.indexOf(nums[i])
            nums.splice(index, 1)
            nums.push(0)
        }
        
    }
};