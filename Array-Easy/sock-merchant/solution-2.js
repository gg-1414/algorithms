function sockMerchant(n, ar) {
    let pairs = 0;
    let socks = {};
    for (let i = 0; i < n; i++) {
        if (!socks[ar[i]]) {
            socks[ar[i]] = 1;
        } else {
            pairs++;
            socks[ar[i]]--;
        }
    }
    return pairs;
}
