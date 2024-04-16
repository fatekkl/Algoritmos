/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    const higher = Math.max(...nums)
    const lower = Math.min(...nums)

    if (target > higher) {
        return nums.length
    }

    if (target < lower) {
        return 0
    }

    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target && nums[i + 1] > target) {
                return i + 1
            }
        }

    }
};

// Na questão era pedido um algoritmo com nivel de complexidade O(n) caso contrario um Binary Search seria a forma ideal de abordagem