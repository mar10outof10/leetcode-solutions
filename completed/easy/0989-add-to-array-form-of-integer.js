/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let numStack = [...num];
  let add = Array.from(String(k), Number);

  let carry;

  for (i = numStack.length - 1; i >= 0; i--) {
    if (add.length) {
      if (carry) {
        numStack[i] += add.pop() + 1;
        carry = false;
      } else {
        numStack[i] += add.pop();
      }
    }
    if (carry) {
      numStack[i]++;
      carry = false;
    }
    if (numStack[i] >= 10) {
      numStack[i] = numStack[i] % 10
      carry = true;        
    }
  }

  while (carry) {
    numStack.unshift(1)
    if (add.length) {
      numStack[0] += add.pop()
      if (numStack[0] >= 10) {
        numStack[0] = numStack[0] % 10;
        continue;
      }
    }
    carry = false;
  }

  while (add.length) {
    numStack.unshift(add.pop());
  }

  return numStack;
};

// debug
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 4525234516));
console.log(addToArrayForm([6,5,6], 6));
console.log(addToArrayForm([7], 993));
console.log(addToArrayForm([0], 10000));
console.log(addToArrayForm([6], 809));
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));
console.log(addToArrayForm([2,1,5], 806))
console.log(addToArrayForm([0], 23))