/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = nums => {
  for (let i = 0; i < nums.length; i++) {
    let one = nums[i];
    let two;

    for (let j = nums.length - 1; j > i; j--) {
      let val = nums[j];
      if (val > one) {
        if (two === undefined || val <= two) {
          two = val;
        } else {
          return true;
        }
      }
    }

  }

  return false;
};

console.log(find132pattern([1,2,3,4]))
console.log(find132pattern([3,1,4,2]))
console.log(find132pattern([-1,3,2,0]))