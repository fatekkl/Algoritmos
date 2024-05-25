/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let ans = [];
    let words = [];

    const backTrack = function (start) {
        if (start === s.length) {
            ans.push(words.join(' '));
            return;
        }
        for (let i = start; i < s.length; i++) {
            let word = s.substring(start, i + 1);
            if (!wordDict.includes(word)) continue;
            words.push(word);
            backTrack(i + 1);
            words.pop();
        }
    }
    backTrack(0);
    return ans;
};