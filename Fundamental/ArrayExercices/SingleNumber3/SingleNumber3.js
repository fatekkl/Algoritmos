var singleNumber = function (nums) {

    const count = {};
    let res = []
    nums.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });
    for (const key of Object.keys(count)) {
        if (count[key] === 1) {
            res.push(key)
        }
    }
    return res
};