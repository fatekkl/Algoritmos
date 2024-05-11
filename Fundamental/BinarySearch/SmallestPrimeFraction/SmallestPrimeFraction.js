// 786 - Kth Smallest Prime Fraction

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    // Search space is 0 to 1
    // Condition is count of fractions <= middle is >= K
    let l = 0;
    let r = 1;

    while(l < r) {
        let m = (l + r)/2;

        let count = 0;
        let p = 0;
        let q = 1;
        for(let i = 0, j = 1; i < arr.length - 1; i++) {
            while(j < arr.length && arr[i] > m * arr[j]) {
                j++;
            }

            count += arr.length - j;
            
            if(arr[i] * q > arr[j] * p) {
                p = arr[i];
                q = arr[j];
            }
        }

        if(count > k) {
            r = m;
        } else if(count < k) {
            l = m;
        } else {
            return [p, q];
        }
    }
};