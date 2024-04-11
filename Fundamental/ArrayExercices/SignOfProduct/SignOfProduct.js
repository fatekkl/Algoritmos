/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {

    if (nums.includes(0)){
        return 0
    }

    let product = 1

    let counter = 0

    while (counter < nums.length) {
        product = product * nums[counter]

        counter++;
    }

    function signFunc(x) {
        
        if (x > 0) {
            x = 1
        } else {
            x = -1
        }

        return x
    }


    return signFunc(product)
};