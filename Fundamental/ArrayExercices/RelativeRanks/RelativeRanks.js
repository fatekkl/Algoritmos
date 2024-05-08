/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

    

    const sorted = score.slice().sort((a, b) => b - a)

    const placements = score.map((x) => {
        let position = sorted.indexOf(x) + 1

        switch(position){

            case 1:
            position = "Gold Medal"
            break

            case 2:
            position = "Silver Medal"
            break

            case 3:
            position = "Bronze Medal"
            break
        }

        return position.toString()
    })
    
    return placements
};