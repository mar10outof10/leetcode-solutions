// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]

// ex3

// n = 2
// Output: ["(())", "()()"]
// notes
// receive n, value = 1 - 8
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => { // sic
  const set = new Set(); // check for duplicates
  const res = []; // result

  let c = n; // counter
  let len = 0; // length of parentheses combo

  while (c > 0) {
    for (const combo of res) { // iterate through every letter of every existing combination
      for (let i = 0; i < combo.length; i++) {
        if (combo[i] === "(") {
          let temp = combo.split('');
        }
      }
    }
    if (!(res.length)) { // manually add parentheses on first pass
      res.push("()")
      set.add("()");
    }
    c--;
    len += 2;
  }

  return res;
};

console.log(generateParenthesis(1));