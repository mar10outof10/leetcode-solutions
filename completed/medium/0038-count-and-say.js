/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let res = "1";
  if (n === 1) {
    return res;
  } else {
    let resArr = recurse(["1"], n - 1);
    return resArr.join('');
  }
};

const recurse = (arr, n) => {
  let curr = arr[0];
  let c = 1;
  let resArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != curr) {
      resArr.push(c);
      resArr.push(curr);
      curr = arr[i];
      c = 1;
    } else {
      c++;
    }
  }

  resArr.push(c);
  resArr.push(curr);
  
  if (n === 1) {
    return resArr
  } else {
    return recurse(resArr, n - 1);
  }
}


console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));