


function FirstCharWithNoRepeat(word) {
    word = word.toLowerCase()

    word = word.split("")


    const map = new Map()

    for (let i = 0; i < word.length - 1; i++) {

        const char = word[i]


        // verifica se o caractere já existe
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }

    }

    console.log(map)
}



FirstCharWithNoRepeat("Google")