// elaborado em resposta ao curso do Augusto Galego

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const regex = /\b[\w’']+\b/g
    let res = ""

    const words = s.match(regex)

    for (let i = 0; i < words.length; i++) {
        const wordString = words[i]
        const word = wordString.split("")

        let l = 0
        let r = word.length - 1

        while (l < r) {
            let v = word[l]

            word[l] = word[r]
            word[r] = v

            l++
            r--
        }

      words[i] = word.join("")
    }

    words.forEach(x => {
        res += x + " "
    })

   return res.trim()
};