/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (char of magazine) {
        ransomNote = ransomNote.replace(char, "")
    }

   if (ransomNote) return false

   return true
};