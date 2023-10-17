import { testMultipleSolutionsStrict } from "#testing/testFunctions.js"

/*
Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
*/

const minRemoveToMakeValid = inputString => {
  let validCount = 0; // counter for valid pairs of parentheses in final string
  let openCount = 0; // counter for open parentheses

  for (const char of inputString) {
    switch (char) {
      case '(':
        openCount++;
        break;
      case ')':
        if (openCount) {
          validCount++;
          openCount--;
        }
        break;
      default:
    }
  }

  let res = '';
  let currentOpen = 0; // counter for open parentheses for second iteration

  for (const char of inputString) {
    switch (char) {
      case '(':
        if (validCount) {
          res += '(';
          currentOpen++;
          validCount--;
        }
        break;
      case ')':
        if (currentOpen) {
          res += ')';
          currentOpen--;
        }
        break;
      default:
        res += char;
    }
  }

  return res;
};

const solutions = [
  {
    "inputString": 'lee(t(c)o)de)',
    "answers": ['lee(t(c)o)de', 'lee(t(co)de)', 'lee(t(c)ode'], 
  },
  {
    "inputString": 'a)b(c)d',
    "answers": ['ab(c)d'], 
  },
  {
    "inputString": '))((',
    "answers": [''], 
  },
  {
    "inputString": '())()(((',
    "answers": ['()()'], 
  },
];

testMultipleSolutionsStrict(minRemoveToMakeValid, solutions);