/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }
  const val = nums[0];
  const y = nums[1];
  for (i = 2; i < nums.length; i++) {
    if (nums[i] > y) {
      return nums.slice(0, i).splice(i-1, 0, nums[i]);
    }
  }
  return nums.reverse();
};

console.log(nextPermutation([1,2,3])); //[1,3,2]
console.log(nextPermutation([3,2,1]));  // [1,2,3]
console.log(nextPermutation([1,1,5])); // [1,5,1]
console.log(nextPermutation([1])); // [1]