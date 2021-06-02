/**
 * @param {number} n
 * @return {number}
 */
const magicalString = n => {
  let c = 0;
  let loopStr = ""
  const magicalA = "122";
  const magicalB = "112";
  let active = n;
  while (active > 0) {
    loopStr = magicalA + loopStr + magicalB;
    let iterator = active;
    for (i = 0; i < Math.min(loopStr.length, iterator); i++) {
      if (loopStr[i] === "1") {
        c++;
      }
      active--;
    }
  }
  return c;
};

console.log(magicalString(9758)) // 4874

// console.log(magicalString(7)) // 4
// console.log(magicalString(2)) // 1
// console.log(magicalString(17)) // 9

// magical string
// 1 2 2 1 1 2
// 1 2 2 1 2 2 1 1 2 1 1 2
// 1 2 2 1 2 2 1 2 2 1 1 2 1 1 2 1 1 2