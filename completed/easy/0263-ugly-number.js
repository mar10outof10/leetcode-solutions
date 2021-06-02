/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = n => {
  if (n <= 0) {
    return false;
  }
  let i = n;
  while (i > 1) {
    if (i % 5 && i % 3 && i % 2) {
      return false;
    }
    if (!(i % 2)) {
      i = i / 2;
      continue;
    }
    if (!(i % 3)) {
      i = i / 3;
      continue
    }
    if (!(i % 5)) {
      i = i /5;
      continue;
    }
  }
  return true;
};

console.log(isUgly(1)); // t
console.log(isUgly(6)); // t
console.log(isUgly(8)); // t
console.log(isUgly(14)); // f