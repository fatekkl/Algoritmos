/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    jewels = jewels.split("")

    stones = stones.split("")

    let counter = 0;


    for (stn of stones) {
        for (j of jewels) {
            if (j === stn) {
                counter++
            }
        }
    }

    return counter
};