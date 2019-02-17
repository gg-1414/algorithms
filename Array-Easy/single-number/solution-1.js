// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4


var singleNumber = function(nums) {
    var dict = {}; // start with empty object to be used as a dictionary to find the only single element
    nums.forEach(num => {
        if (dict[num] !== undefined) { // if dict has a key with num that exists
            dict[num] = true; // set to true
        } else { // if dict does not already have a key with the value of num
            dict[num] = false; // create a new key-value where key is set to num and value is false
        }
    })
    return Object.keys(dict).find(key => dict[key] === false) // find the only false value and return is key
};
