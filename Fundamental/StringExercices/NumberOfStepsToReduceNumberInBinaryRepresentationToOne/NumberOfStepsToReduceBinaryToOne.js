/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let dec = BigInt(`0b${s}`)

    let counter = 0;

    while (dec != 1n) {
        if (dec % 2n === 1n) {
            dec += 1n
            counter++
        }
        dec = dec/2n
        counter++
    }
    return counter
};