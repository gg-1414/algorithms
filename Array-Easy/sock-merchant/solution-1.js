function sockMerchant(n, ar) {
    let pairs = 0;
    const dict = ar.reduce((map, sock) => {
        if (map[sock]) {
            map[sock] = map[sock] + 1;
        } else {
            map[sock] = 1;
        }
        return map;
    }, {});
    for (let key in dict) {
        if (dict[key] > 1) {
            pairs = pairs + Math.floor(dict[key] / 2);
        }
    }
    return pairs;
}
