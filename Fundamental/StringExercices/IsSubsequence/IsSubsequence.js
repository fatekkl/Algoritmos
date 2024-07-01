/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let dp = new Array(s.length+1);
    for (let row = 0; row < s.length+1; row++){
        dp[row] = new Array(t.length+1).fill(0);
    }
    for (let row = 1; row < s.length+1; row++){
        for (let column = 1; column < t.length+1; column++){
            if (s[row-1] === t[column-1]){
                dp[row][column] = 1 + dp[row-1][column-1];
            }
            else{
                dp[row][column] = dp[row][column-1];
            }
        }
    }
    return dp[s.length][t.length] === s.length;
};