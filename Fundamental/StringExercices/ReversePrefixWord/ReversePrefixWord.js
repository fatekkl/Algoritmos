/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {

    const arr = word.split("")

    let copy = []

    for (let i = 0; i < arr.length; i++) {

        const index = arr.indexOf(ch)

        if (word[i] === ch) {
            copy = (arr.splice(0 , index + 1).reverse())
            arr.unshift(...copy)
        }    
    }
    
    return arr.join("")
};