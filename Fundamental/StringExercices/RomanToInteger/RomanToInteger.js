/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0
    let prev = 0

    for (let i = s.length - 1; i >= 0; i--) {
        let value = sym[s[i]]


        if (value >= prev) {
            total += value
        } else {
            total -= value
        }

        prev = value
    }

    return total
};