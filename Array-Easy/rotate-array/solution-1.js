var rotate = function(nums, k) {
    if (k === 0) { return nums }
    else {
        nums.unshift(nums.pop());
        return rotate(nums, k-1);
    }
};
