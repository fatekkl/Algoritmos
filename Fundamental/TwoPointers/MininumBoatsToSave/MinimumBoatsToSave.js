/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {

    people.sort((a, b) => (a - b))
    let count = 0
    let l = 0, r = people.length - 1
    while (l <= r) {
        let diff = limit - people[r]
        count++
        r--
        if (diff >= people[l]) l++;
    }
    return count;
};
