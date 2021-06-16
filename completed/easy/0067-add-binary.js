/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  if (a.length >= b.length) {
    aStack = a.split('').map(str => Number(str));
    bStack = b.split('').map(str => Number(str));
  } else {
    aStack = b.split('').map(str => Number(str));
    bStack = a.split('').map(str => Number(str));

  }
  const res = [];
  let carry = 0;
  for (i = aStack.length; i > 0; i--) {
    let val = carry;
    carry = 0;
    val += aStack.pop();
    if (bStack.length) {
      val += bStack.pop();
    }
    res.unshift(val % 2);
    carry = Math.floor(val / 2);
  }
  while (carry) {
    res.unshift(carry % 2);
    carry = Math.floor(carry / 2);
  }
  return res.join('');
}


// // debug
// console.log(addBinary('11','1')); // 100

// console.log(addBinary('1010','1011')); // 10101

// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")) //"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"