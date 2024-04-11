var repeatedSubstringPattern = function(s) {
    let i = 1, len = s.length;
    while (i <= Math.floor(len/2)) {
        if (s.slice(0, i).repeat(len/i) == s) return true;
        i++
    }
    return false;
};