function repeatedString(s, n) {
    let count = 0;
    for (let i of s) {
        if (i === 'a') {
            count++;
        }
    }
    count *= Math.floor(n / s.length);
    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
    return count;
}
