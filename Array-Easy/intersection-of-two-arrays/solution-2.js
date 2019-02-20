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
  // reduce nums1 to create dictionary object to keep track of how often each number occurs
  const nums1dict = nums1.reduce((map, num) => {
    map[num] = map[num]+1 || 1;
    return map;
  }, {})
  console.log(nums1dict);
  // filter nums2 to filter out values based on how often they occurred in nums1
  return nums2.filter(num => {
    if(nums1dict[num]) {
      nums1dict[num]--;
      return true;
    } else {
      return false;
    }
  })
}

// intersect([1,2,2,1], [2,2]);
