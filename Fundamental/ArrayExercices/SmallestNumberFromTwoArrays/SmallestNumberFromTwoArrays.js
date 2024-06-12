/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    
    for (let i = 0; i < (nums1.length, nums2.length); i++) {
        if (nums1.includes(nums2[i])) {
            return nums2[i]
        }
    }
    let val1 = nums1[0]
    let val2 = nums2[0]
    if (val1 > val2) {
        return val2.toString() + val1.toString()
    } else {
        return val1.toString() + val2.toString()
    }
};