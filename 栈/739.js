const dailyTemperatures = (T) => {
    const res = new Array(T.length).fill(0);
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
}

