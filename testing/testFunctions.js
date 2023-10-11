import lodash from 'lodash';
const { isEqual } = lodash;

/**
 * Assertion function to compare testFunction generated answers with known solutions
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testSolution = (testFunction, solutions) => {

  for (const solution of solutions) {
    const { answer, ...params } = solution;
    const testAnswer = testFunction({...params});

    if (isEqual(answer, testAnswer)) {
      console.log(`
        The correct value, ${answer}, is properly returned by the provided function.
      `)
    } else {
      console.log(`
        The correct value, ${answer}, is not returned by the provided function.
        The function returns, ${testAnswer}, instead.
      `)
    }
  }

  return null;
};

export { testSolution };