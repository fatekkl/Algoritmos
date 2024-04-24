/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {

    let copy = num.toString()

    while (copy.length > 1) {
        const splited = copy.split("")
        let count = 0
        for (i in splited) {
            count += parseInt(splited[i])
        }
        copy = count.toString()
    }

    return copy
};