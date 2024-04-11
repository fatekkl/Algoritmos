/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    word1 = word1.split("")
    word2 = word2.split("")

    let word3 = ""

    let last = ""

    if (word1.length > word2.length) {
        while (word1.length > word2.length) {
            last += word1.pop()
        }
    }

    if (word2.length > word1.length) {
        while (word2.length > word1.length) {
            last += word2.pop()
        }
    }
    
    last = last.split("").reverse().join("")

    for (let i = 0; i < word1.length; i++){
        word3 += word1[i]
        word3 += word2[i]
    }

    word3 += last

    return word3
};