// Given two arrays, write a function to compute their intersection.
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Example 3:
//
// Input: nums1 = [5,3,8,1], nums2 = [9,1,2,3,8]
// Output: [3,8,1] or [1,3,8] or [8,1,3]


var intersect = function(nums1, nums2) {
  let result = [];
  const nums1dict = dictionary(nums1);
  const nums2dict = dictionary(nums2);
  Object.keys(nums1dict).forEach(key => {
    if(nums2dict[key]) {
      if(nums1dict[key] === nums2dict[key] || nums1dict[key] < nums2dict[key]) {
        for(let i = 1; i <= nums1dict[key]; i++) {
          result.push(key);
        }
      } else {
        for(let i = 1; i <= nums2dict[key]; i++) {
          result.push(key);
        }
      }
    }
  });
  return result;
};

var dictionary = function(arr) {
  let map = {};
  arr.forEach(el => {
    if(map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  });
  return map;
}
