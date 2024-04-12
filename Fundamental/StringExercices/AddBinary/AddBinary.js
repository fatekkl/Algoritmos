/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const aBinary = `0b${a}`
    const bBinary = `0b${b}`

    const result = BigInt(bBinary) + BigInt(aBinary)

    return result.toString(2)
};
