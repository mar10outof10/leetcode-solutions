const plusOne = digits => {
  const len = digits.length;
  const stack = [];
  while (stack.length < len) {
    let x = digits.pop();
    if (x === 9) {
      stack.unshift(0);
    } else {
      stack.unshift(x+1);
      return digits.concat(stack);
    }
  }
  stack.unshift(1);
  return stack;
};

console.log(plusOne([4,3,2,1]));
console.log(plusOne([0]));
console.log(plusOne([9,9,9,9,9]));