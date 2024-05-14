/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            return 0;
        }

        const gold = grid[r][c];
        grid[r][c] = 0;

        let maxCollected = 0;
        for (let [x, y] of directions) {
            maxCollected = Math.max(maxCollected, dfs(r + x, c + y));
        }

        grid[r][c] = gold; 
        return gold + maxCollected;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0) {
                maxGold = Math.max(maxGold, dfs(r, c));
            }
        }
    }

    return maxGold;
};