function repeatedString(s, n) {
    const counta = str => str.split('')
        .filter(char => char === 'a')
        .length

    const r = n % s.length;
    return counta(s) * Math.floor(n / s.length) + counta(s.substr(0, r));
}
