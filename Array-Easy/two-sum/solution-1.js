// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] + nums[i+1] === target) {
            result.push(i, i+1);
            return result;
        }
    }
    const copyNums = nums.slice(1,nums.length);
    return twoSum(copyNums, target);
};

console.log(twoSum([3,2,4], 6)) // output should be [1, 2]
