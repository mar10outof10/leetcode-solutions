import lodash from 'lodash';
const { isEqual, sortBy } = lodash;

/**
 * Assertion function to strictly compare testFunction generated answers with known solutions
 * Will display success only if answers are strictly equal
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testSolutionsStrict = (testFunction, solutions) => {

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
 * Assertion function to compare testFunction generated answer with known solutions
 * Will display success if answer matches one of the solutions in the answers array provided
 * @param {Function} testFunction 
 * @param {Array} solutions 
*/
const testMultipleSolutionsStrict = (testFunction, solutions) =>{

  let success = true;

  for (const solution of solutions) {

    const { answers, ...params } = solution;
    const testAnswer = testFunction(...Object.values(params));

    if (answers.includes(testAnswer)) {
      console.log(`\n \u2705 A correct answer, '${testAnswer}', is returned by the provided function.`);
    } else {
      console.log(`\n \u274C A correct answer is not returned by the provided function.\n    The function returns, '${testAnswer}'.\n   The correct answer(s) are '${[...answers].join(`' | '`)}'`);
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
const testSolutionsUnorderedArray = (testFunction, solutions) => {

  let success = true;

  for (const solution of solutions) {

    const { answer, ...params } = solution;
    const testAnswer = testFunction(...Object.values(params));

    if (isEqual(sortBy(answer), sortBy(testAnswer))) {
      console.log(`\n \u2705 The correct array contents, ${testAnswer}, are returned by the provided function.`);
    } else {
      console.log(`\n \u274C The correct array contents, ${answer}, are not returned by the provided function.\n    The function returns, ${testAnswer}.`);
      success = false;
    }
  };

  console.log(`\n ${success ? `\u{1F600}` : `\u{1F621}` } Unit tests ${success ? `sucessful` : `failed`}\n`);

  return null;
};

export { testSolutionsStrict, testMultipleSolutionsStrict, testSolutionsUnorderedArray };