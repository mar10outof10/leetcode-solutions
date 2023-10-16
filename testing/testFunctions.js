import lodash from 'lodash';
const { isEqual, sortBy } = lodash;

/**
 * Assertion function to strictly compare testFunction generated answers with known solutions
 * Will display success only if answers are strictly equal
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testSolutionStrict = (testFunction, solutions) => {

  let success = true;

  for (const solution of solutions) {

    const { answer, ...params } = solution;
    const testAnswer = testFunction(...Object.values(params));

    if (isEqual(answer, testAnswer)) {
      console.log(`\n \u2705 The correct answer, ${answer}, is returned by the provided function.`);
    } else {
      console.log(`\n \u274C The correct answer, ${answer}, is not returned by the provided function.\n    The function returns, ${testAnswer}.`);
      success = false;
    }
  };

  console.log(`\n ${success ? `\u{1F600}` : `\u{1F621}` } Unit tests ${success ? `sucessful` : `failed`}\n`);

  return null;
};

/**
 * Assertion function to compare testFunction generated array answers with known solutions
 * Will display success if array contents are identical regardless of sorting order
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testSolutionUnorderedArray = (testFunction, solutions) => {

  let success = true;

  for (const solution of solutions) {

    const { answer, ...params } = solution;
    const testAnswer = testFunction(...Object.values(params));

    if (isEqual(sortBy(answer), sortBy(testAnswer))) {
      console.log(`\n \u2705 The correct answer, ${testAnswer}, is returned by the provided function.`);
    } else {
      console.log(`\n \u274C The correct answer, ${answer}, is not returned by the provided function.\n    The function returns, ${testAnswer}.`);
      success = false;
    }
  };

  console.log(`\n ${success ? `\u{1F600}` : `\u{1F621}` } Unit tests ${success ? `sucessful` : `failed`}\n`);

  return null;
};

export { testSolutionStrict, testSolutionUnorderedArray };