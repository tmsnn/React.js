/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let ans = nums.reduce(fn, init);
    return ans;

    // let val = init;
    // for(i in nums){
    //     val = fn(val, nums[i]);
    // }

    // return val;
};