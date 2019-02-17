// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
//
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
//
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


var rotate = function(nums, k) {
    if (k === 0) { return nums } // base case
    else {
        nums.unshift(nums.pop()); // nums.pop() returns last element as well as removes it from the nums array (mutates),
        // nums.unshift() pushes that to the front of the nums array (also mutates original array)
        return rotate(nums, k-1); // keep running function until k === 0
    }
};
