/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let counter = 0
    let countertwo = 0
    let i = 0
    moves = moves.split("")

    while (i < moves.length) {
        if (moves[i] === "U") {
            counter++;
        }
        if (moves[i] === "R") {
            countertwo++;
        }
        if (moves[i] === "D") {
            counter--;
        }
        if (moves[i] === "L") {
            countertwo--;
        }
        i++
    }
    
    if (counter !== 0 || countertwo !== 0){
        return false
    }
    return true
};