/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  let p1 = 0;
  let p2 = 1;
  let len = nums.length;
  let sub = len % 2 - 1
  while (true) {
    let num1 = nums[p1]
    let num2 = nums[p2]
    console.log(p1, num1, p2, num2)
    if (num1 === num2 && p1 !== p2) {
      return num1;
    }

    p1++;
    if (p1 === len) {
      p1 = 0;
    }
    p2 += 2;
    if (p2 >= len) {
      p2 = p2 - len - sub;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([1, 1]))