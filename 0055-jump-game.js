/**
 * @param {number[]} nums
 * @return {boolean}
 */
let hist;
const recJump = (nums, i) => {
  if (hist.has(i)) {
    return
  }
  let jump = nums[i];
  hist.add(i);

  for (let j = i + 1; j < nums.length && j <= i + jump; j++) {
    if (!hist.has(j)) {
      recJump(nums, j)
    }
  }
}

const canJump = nums => {
  hist = new Set();
  recJump(nums, 0);
  if (hist.has(nums.length - 1)) {
    return true;
  }
  return false;

};

console.log(canJump([3,2,1,0,4])) // false
console.log(canJump([2,3,1,1,4])) // true
console.log(canJump([2, 0])) // true