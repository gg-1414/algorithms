// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Note: You may assume the string contain only lowercase letters.

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.


var firstUniqChar = function(s) {
    let dict = {};
    for (let char of s) {
        if(dict[char]) {
            dict[char] = dict[char] + 1;
        } else {
            dict[char] = 1;
        }
    }
    for (let char of s) {
        if (dict[char] === 1) {
            return s.indexOf(char)
        }
    }
    return -1;
};
