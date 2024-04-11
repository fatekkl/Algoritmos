/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    t = t.split("").sort().join("")
    s = s.split("").sort().join("")

    if (s.length !== t.length) {
        return false
    }

    return s.includes(t)

  
}