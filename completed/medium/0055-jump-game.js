const canJump = nums => {
  const len = nums.length - 1 // upper limit
  if (!len) { // length of 1 return true, start at last index
    return true;
  }
  let jump = nums[0];
  let i = 0;
  while (jump > 0) { // traverse nums with your jump
    jump-- // decrement jump each traversal
    if (nums[i] > jump) {
      jump = nums[i]; // update jump if value is higher than current jump
    }
    if (jump) { // if we still have jump then increment index counter
      i++;
      if (i === len) { // escape function when we hit the last index
        return true;
      }
    }
  }
  return false; // implicit that we never hit the last index if we hit this return
}

// debug
console.log(canJump([1,2,3])) // true
console.log(canJump([3,2,1,0,4])) // false
console.log(canJump([2,3,1,1,4])) // true
console.log(canJump([2, 0])) // true