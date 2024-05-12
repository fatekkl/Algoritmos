var largestLocal = function (grid, count = 2) {
    let n = grid.length
    let arr = []
    for (let i = 0; i < n - 1; i++)    arr[i] = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[i][j] = Math.max(grid[i][j], Math.max(grid[i][j + 1], Math.max(grid[i + 1][j], grid[i + 1][j + 1])))
        }
    }
    return --count == 0 ? arr : largestLocal(arr, count)
};