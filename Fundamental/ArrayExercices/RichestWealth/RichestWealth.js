/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    const max = accounts.map((arr) => {
        let counter = 0

        for (let i = 0; i < arr.length; i++) {
            counter += arr[i]
        }
        return counter
    })

    

    return Math.max(...max)
}