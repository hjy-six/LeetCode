const coinChange = (coins, amount) => {
    if(!amount) {
        return 0;
    }

    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let i =0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}
