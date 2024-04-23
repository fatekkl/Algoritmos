/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n <= 0) {
        return false
    }

    let splited = n.toString().split("")

    let bool = false

    for (let i = 0; i < 10; i++) {
        let val = 0

        splited.forEach(x => val += parseInt(x) **2)
        splited = val.toString().split("")

        if (val === 1){
            bool = true
        }
    }
    return bool
};