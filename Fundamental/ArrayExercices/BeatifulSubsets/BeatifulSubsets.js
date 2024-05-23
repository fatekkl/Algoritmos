/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    const n = nums.length;
    let result = 0;

    const backtrack = (start, subset) => {
        if (subset.length > 0) {
            result++;
        }
        for (let i = start; i < n; i++) {
            let valid = true;
            for (let num of subset) {
                if (Math.abs(num - nums[i]) === k) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
};