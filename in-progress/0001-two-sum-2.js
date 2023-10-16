import { testSolutionsUnorderedArray } from '#testing/testFunctions.js';

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  let numsCopy = nums.slice();

  for (let i = nums.length - 1; i > 0; i--) {
    numsCopy.pop();

    let addendIndex = numsCopy.indexOf(target - nums[i]);

    if (addendIndex != -1) {
      return [i, addendIndex];
    }
  }

  return null;
};

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

testSolutionsUnorderedArray(twoSum, solutions);