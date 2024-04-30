/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length
    const arr = []

    // cria arr com numeros de 1 a n
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        if (!nums.includes(arr[i])) {
            return arr[i]
        }
    }



};