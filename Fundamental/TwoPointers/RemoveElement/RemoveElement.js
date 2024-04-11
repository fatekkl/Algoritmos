/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let removeindex = nums.indexOf(val)

    let k = 0

    while (nums.includes(val)) {
        nums.splice(removeindex , 1)
        removeindex = nums.indexOf(val)
        k++;
    }
};