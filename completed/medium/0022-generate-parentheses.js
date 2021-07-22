let res;

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => { // sic
  res = [];
  recursiveParentheses('', n, 0);

  return res;
};

const recursiveParentheses = (combo, l, r) => {
  if (l === 0) { // exit case, l = 0 close all parentheses and return combo
    res.push(combo += ")".repeat(r));
    return;
  }
  recursiveParentheses(combo + "(", l - 1, r + 1);
  if (r !== 0) {
    recursiveParentheses(combo + ")", l, r - 1);
  }
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(5));
console.log(generateParenthesis(8));