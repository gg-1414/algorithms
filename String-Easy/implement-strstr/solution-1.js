var strStr = function(haystack, needle) {
    if (needle === '') { return 0 }
    for (let i in haystack) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(parseInt(i), parseInt(i) + needle.length) === needle) {
                return i;
            }
        }
    }
    return -1;
};
