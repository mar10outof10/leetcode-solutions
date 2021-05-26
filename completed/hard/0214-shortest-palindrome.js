const checkPalindrome = string => {
  let index;
  if (string.length % 2) {
      index = Math.floor(string.length / 2)
      return (string.slice(0, index).split('').reverse().join('') === string.slice(index + 1))
  } else {
      index = string.length / 2
      return (string.slice(0, index).split('').reverse().join('') === string.slice(index))
  }
}


const compareStr = (i, str, subStr) => {
  let compareStr = str.slice(i, i + i);
  if (subStr === compareStr) {
      return 1;
  }
  compareStr = str.slice(i + 1, i + i + 1);
  if (subStr === compareStr) {
      return 2;
  }
  return false;
}


const buildStr = (i, str, mode) => {
  if (mode === 'odd') {
      return (str.slice(i + i + 1).split('').reverse().join('') + str);
  } else {
      return (str.slice(i + i).split('').reverse().join('') + str);
  }
}


/**
* @param {string} s
* @return {string}
*/
var shortestPalindrome = s => {
  if (checkPalindrome(s)) {
      return s;
  }
  
  let i = Math.floor(s.length / 2);
  let compStr = s.slice(0, i).split('').reverse().join('')
  
  for (; i > 0; i--) {
      
      let evaluate = compareStr(i, s, compStr)
      if (evaluate) {
          if (evaluate === 1) {
              return buildStr(i, s, 'even')
          } else {
              return buildStr(i, s, 'odd')
          }
      }
      compStr = compStr.slice(1)
  }
  return buildStr(0, s, 'odd')
};