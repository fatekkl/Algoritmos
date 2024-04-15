/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    if (s.length <= 1) {
        return true
    }

    const filteredTxt = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("")

    const invertedTxt = [...filteredTxt].reverse()

    // console.log(filteredTxt.join("") , invertedTxt.join(""))

    if (filteredTxt.join("") === invertedTxt.join("")) {
        return true
    }

    return false
};