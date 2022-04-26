/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = nums => {
  let len = nums.length;
  // 0/1/2 nums array exit
  if (len <= 2) {
    if (len === 2 && nums[0] === nums[1]) {
      return 1;
    }
    return len;
  }

  let prev = nums[0];
  let wiggleLength = 1;
  let max = 1;
  let wigglePos = null; // 1 if positive difference between current and prev, 0 if negative, null if reset
  let curr = null;

  for (let i = 1; i < len; i++) {
    curr = nums[i];
    if (curr === prev) {
      max = Math.max(max, wiggleLength);
      wiggleLength = 1;
      wigglePos = null;
    } else {

      if (wigglePos === null) {
        wigglePos = (curr - prev > 0 ? 1 : 0);
        wiggleLength++;
      } else if (wigglePos === 1) {
        if (curr - prev < 0) {
          wigglePos = 0;
          wiggleLength++;
        } else {
          max = Math.max(max, wiggleLength);
          wiggleLength = 1;
          wigglePos = null;
        }
      } else {
        if (curr - prev > 0) {
          wigglePos = 1;
          wiggleLength++;
        } else {
          max = Math.max(max, wiggleLength);
          wiggleLength = 1;
          wigglePos = null;
        }
      }

    }
    prev = curr;
  }

  return Math.max(max, wiggleLength);
};

// console.log(wiggleMaxLength([1,7,4,9,2,5]));
// console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]));
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));