function countingValleys(n, s) {
    let pos = 0,
        count = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            ++pos;
        } else if (s[i] === 'D') {
            --pos;
            if (pos === -1) {
                count++;
            }
        }
    }
    return count;
}
