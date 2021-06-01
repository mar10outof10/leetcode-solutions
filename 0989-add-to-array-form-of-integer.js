/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let outStack = [];
  let numStack = [...num];
  let add = Array.from(String(k), Number);
  if (numStack.length < add.length) {
    [numStack, add] = [add, numStack]
  }
  while (add.length) {
    outStack.push(numStack.pop() + add.pop());
  }
  while (outStack.length) {
    numStack.push(outStack.pop())
  }
  let carry;
  for (i = numStack.length -1; i >= 0; i--) {
    if (carry) {
      numStack[i]++;
      carry = false;
    }
    if (numStack[i] >= 10) {
      numStack[i] = numStack[i] % 10
      carry = true;
    }
  }
  if (carry) {
    numStack.unshift(1)
  }
  return numStack;
};

// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 4525234516));
console.log(addToArrayForm([2,1,5], 806))
console.log(addToArrayForm([0], 23))