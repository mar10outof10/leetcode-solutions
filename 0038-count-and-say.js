/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let res = "1";
  if (n === 1) {
    return res;
  } else {
    return recurse(res, n - 1);
  }
};

const recurse = (str, n) => {
  let strArr = str.split('');
  let curr = strArr[0];
  let c = 1;
  let resArr = [];

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] !== curr) {
      resArr = resArr.concat([c, curr]);
      curr = strArr[i];
      c = 1;
    } else {
      c++;
    }
  }

  resArr = resArr.concat([c, curr]);

  let nextStr = resArr.join('');
  
  if (n === 1) {
    return nextStr;
  } else {
    return recurse(nextStr, n - 1);
  }
}



// /**
//  * @param {number} n
//  * @return {string}
//  */
// const countAndSay = (n) => {
//   let res = "1";
//   if (n === 1) {
//     return res;
//   } else {
//     return recurse(res, n - 1);
//   }
// };

// const recurse = (str, n) => {
//   let obj = {};
//   let strArr = str.split('');
//   let resArr = [];
//   for (const num of strArr) {
//     obj[num] ? obj[num]++ : obj[num] = 1;
//   }
//   for (let i = 9; i >= 0; i--) {
//     let numStr = String(i);
    
//     if (obj[numStr]) {
//       resArr = resArr.concat([obj[numStr], numStr]);
//     }
//   }
//   let nextStr = resArr.join('');
//   if (n === 1) {
//     return nextStr;
//   } else {
//     return recurse(nextStr, n - 1);
//   }
// }

console.log(countAndSay(1));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));