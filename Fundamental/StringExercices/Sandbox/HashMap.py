def firstUniqChar(s: str):
    d = {}

    for idx, char in enumerate(s):
        if not d.get(char):
            d[char] = [idx, 1]
        else:
            d[char][1] += 1

    for ch, val in d.items():
        if val[1] == 1:
            return val[0]

    return -1


result = firstUniqChar("leetcodelove")

print(result)
