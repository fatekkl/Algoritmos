/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {

    nums = nums.sort((a, b) => a - b);

    const min = []

    let result = -1

    nums.forEach((y) => {
        if (y < 0) {
           min.unshift(y)
        }
    })
    
    min.forEach((x) => {
        if (nums.includes(x * -1)){
            result = x * -1
        } 
    })
    
    return result
};