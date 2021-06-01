/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = nums => {
  const numsC = [...nums];

  for (i = 0; i < numsC.length; i++) {
    let max
    let one = numsC[i];
    for (j = i + 1; j < numsC.length; j++) {
      if (max === undefined || numsC[j] >= max) {
        max = numsC[j];
      } else if (numsC[j] > one) {
        return true;
      }
    }
  }
  return false;
};

console.log(find132pattern([1,2,3,4]))
console.log(find132pattern([3,1,4,2]))
console.log(find132pattern([-1,3,2,0]))