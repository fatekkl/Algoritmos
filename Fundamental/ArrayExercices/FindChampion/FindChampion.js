/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const len = grid.length;
    let max = 0;
    let champion = 0;
    for(let i = 0; i < len; i++) {
        grid[i] = grid[i].filter(i => i == 1).length;
        if(max < grid[i]) {
            max = grid[i];
            champion = i
        }
    }
    return champion
};