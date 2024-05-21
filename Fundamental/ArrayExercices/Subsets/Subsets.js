var subsets = function(nums) {
    let res = [[]];
    for (let num of nums) {
        let n = res.length;
        for (let i = 0; i < n; ++i) {
            let curr = res[i].slice();
            curr.push(num);
            res.push(curr);
        }
    }
    return res;
};