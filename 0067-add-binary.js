/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
    let aStack = a.split('');
    let bStack = b.split('');
    let resStack = [];
    let carry = 0;
    while (aStack.length || bStack.length) {
      let val = carry;
      aStack.length ? val += Number(aStack.pop()) : null;
      bStack.length ? val += Number(bStack.pop()) : null;
      console.log(val);
      console.log(aStack, bStack);
      // console.log(val);
      if (val % 2) {
        resStack.unshift(1);
      } else {
        resStack.unshift(0);
      }
      carry = Math.floor(val / 2);
    }

    while (carry) {
      if (carry % 2) {
        resStack.unshift(1);
      } else {
        resStack.unshift(0);
      }
      carry = Math.floor(carry / 2);
    };

    return resStack.join('');
};

console.log(addBinary('1010','1011'));