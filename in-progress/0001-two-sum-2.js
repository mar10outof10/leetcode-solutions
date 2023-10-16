import { testSolution } from '#testing/testFunctions.js';

const twoSum =  (nums, target) => {
  return null;
};

// test cases
const solutions = [
  {
    'nums': [2,7,11,15],
    'target': 9,
    'answer': [0,1],
  },
  {
    'nums': [3,2,4],
    'target': 6,
    'answer': [1,2],
  },
  {
    'nums': [3,3],
    'target': 6,
    'answer': [0,1],
  },
];

testSolution(twoSum, solutions);