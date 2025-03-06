function maximumLengthSubstring(s) {
    let l = 0
    let r = 0
    let max = 1

    const map = new Map()

    map.set(s[0], 1)

    while (r < s.length) {
        r++

        if (map.has(s[r])) {
            const older = map.get(s[r])

            map.set(s[r], older + 1)
        } else {
            map.set(s[r], 1)
        }

        while (map.get(s[r]) == 3){
            map.get(s[l])--;
            l++
        }

        max = Math.max(max, r-l + 1)
    }
}


maximumLengthSubstring("teste")