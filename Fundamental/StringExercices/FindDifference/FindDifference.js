/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const charArrS = s.split("");
    const charArrT = t.split("");

    for (let i = 0; i < charArrT.length; i++) {
        const charT = charArrT[i];

        if (charArrS.includes(charT)) {
            const index = charArrS.indexOf(charT)
            charArrS.splice(index, 1)
        } else {
            return charT
        }
    }

};