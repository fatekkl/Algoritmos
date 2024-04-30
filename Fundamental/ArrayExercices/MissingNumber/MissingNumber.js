/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length
    const numSet = new Set(nums)

    for (let i = 0; i <= n; i++) {
        if (!numSet.has(i)){
            return i
        }

    }


 //REFACTOR
};