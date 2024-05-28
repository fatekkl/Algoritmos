/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let max = 0
    
    let l = 0
    let count = 0
    for(let r = 0; r < s.length; r++){
        count += Math.abs(s[r].charCodeAt() - t[r].charCodeAt())

        while(count > maxCost){
            count -= Math.abs(s[l].charCodeAt() - t[l].charCodeAt())
            l++   
        }

        max = Math.max(max, r-l+1)
    }


    return max
};