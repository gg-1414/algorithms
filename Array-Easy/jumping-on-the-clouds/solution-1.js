function jumpingOnClouds(c) {
    let pos = 0,
        jumpCount = 0;
    while (pos < c.length-1) {
        if (c[pos + 2] === 0) {
            pos += 2;
        } else {
            pos += 1;
        }
        jumpCount++;
    }
    return jumpCount;
}
