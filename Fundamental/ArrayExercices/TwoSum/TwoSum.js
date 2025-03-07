var twoSum = function (nums, target) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (n + nums[j] == target){
                result.push(i)
                result.push(j)
            }
        }
    }

    return result
};
