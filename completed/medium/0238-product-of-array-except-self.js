/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = (nums) => {
  let len = nums.length;
  let left = [1];
  let right = [1];
  for (let i = 0; i < len - 1; i++) {
    left.push(left[i] * nums[i])
    right.push(nums[len- i - 1] * right[i])
  }
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(left[i] * right[len - i - 1]);
  }
  return res;
};