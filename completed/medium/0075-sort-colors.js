const sortColors = nums => {
  let right = nums.length - 1;

  for (i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    } else if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      right--;
      i--;
    }
  }
}

console.log(sortColors([1,2,0]))