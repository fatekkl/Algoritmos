var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let res = 0;
    x = Math.abs(x);
    while(x != 0) {
        let d = x % 10;
        if(res > (2147483647 - d) / 10) return 0;
        res = res * 10 + d;
        x = Math.floor(x / 10);
    }
    return sign * res;
};