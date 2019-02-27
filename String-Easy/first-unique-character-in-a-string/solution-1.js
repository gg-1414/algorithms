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
    const uniqChars = Object.keys(dict).filter(key => {
        if (dict[key] === 1) {
            return key
        }
    })
    if (uniqChars.length > 0) {
        return s.indexOf(uniqChars[0]);
    } else {
        return -1;
    }

};
