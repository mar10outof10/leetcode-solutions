import lodash from 'lodash';
const { isEqual } = lodash;

/**
 * Assertion function to compare testFunction generated answers with known solutions
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testSolution = (testFunction, solutions) => {

  let success = true;

  for (const solution of solutions) {

    const { answer, ...params } = solution;
    const testAnswer = testFunction(...Object.values(params));

    if (isEqual(answer, testAnswer)) {
      console.log(`\n \u2705 The correct value, ${answer}, is returned by the provided function.`);
    } else {
      console.log(`\n \u274C The correct value, ${answer}, is not returned by the provided function.\n    The function returns, ${testAnswer}, instead.`);
      success = false;
    }
  };

  console.log(`\n ${success ? `\u{1F600}` : `\u{1F621}` } Unit tests ${success ? `sucessful` : `failed`}\n`);

  return null;
};

export { testSolution };