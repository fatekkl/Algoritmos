/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const arr = []

    nums = nums.filter((item, index) => {
        return nums.indexOf(item) === index
    })




    for (let i = 0; i <= 2; i++) {
        const act = Math.max(...nums)

        const index = nums.indexOf(act)

        if (index != -1) {
            arr.push(act)

            nums.splice(index, 1)
        }
    }

    if (arr.length >= 3){
        return arr[2]
    }

    return arr[0]
};