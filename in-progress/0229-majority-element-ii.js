const majorityElement = (nums) => {
  const threshold = Math.floor(nums.length / 3 + 1);
  const majorityObject = {};
  const res = [];
  for (const num of nums) {
    if (majorityObject[num]) {
      majorityObject[num]++;
    } else {
      majorityObject[num] = 1;
    }
  }

  for (const num in majorityObject) {
    if (majorityObject[num] >= threshold) {
      res.push(num);
    }
  }
  
  return res;
}

// testcases
console.log(majorityElement([3,2,3])) // [3]
console.log(majorityElement([1])) // [1]
console.log(majorityElement([1,2])) // [1, 2]