/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    num1 = BigInt(num1)
    num2 = BigInt(num2)

    return (num1 + num2).toString()
};