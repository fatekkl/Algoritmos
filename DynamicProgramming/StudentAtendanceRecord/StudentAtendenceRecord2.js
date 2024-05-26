const dp = new Array(100005).fill().map(() => new Array(2).fill().map(() => new Array(3).fill(-1)));
const mod = 1e9 + 7;

function solve(n, a, l) {
    if (a === 2 || l === 3) return 0;
    if (n === 0) return 1;
    if (dp[n][a][l] !== -1) return dp[n][a][l];
    
    let ans = 0;
    ans = (ans + solve(n - 1, a, 0) % mod) % mod; // present
    ans = (ans + solve(n - 1, a + 1, 0) % mod) % mod; // absent
    ans = (ans + solve(n - 1, a, l + 1) % mod) % mod; // late
    
    return dp[n][a][l] = ans;
}

function checkRecord(n) {
    return solve(n, 0, 0);
}