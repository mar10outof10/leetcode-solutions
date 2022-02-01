/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
const findNumOfValidWords = (words, puzzles) => {

  const createSet = (string) => (new Set(string))

  const wordSetArr = words.map(createSet);
  const wordArr = wordSetArr.map((set) => Array.from(set));
  const wordsLength = words.length;

  const puzzleSetArr = puzzles.map(createSet);
  const puzzlesLength = puzzles.length;
  let firstLetter = null;
  let puzzleSet = null;

  let numOfValidWords = [];

  let validWord = null;

  for (let i = 0; i < puzzlesLength; i++) {
    numOfValidWords.push(0);

    firstLetter = puzzles[i][0];
    puzzleSet = puzzleSetArr[i];

    for (let j = 0; j < wordsLength; j++) {
      validWord = true;

      if (!(wordSetArr[j].has(firstLetter)) || wordSetArr[j].length > puzzleSet.length) {
        continue;
      }
      
      for (const letter of wordArr[j]) {
        if (!(puzzleSet.has(letter))) {
          validWord = false;
          break;
        }
      }

      if (validWord) {
        numOfValidWords[i]++;
      }
    }
  }

  return numOfValidWords;
}

// const findNumOfValidWords = (words, puzzles) => {

//   const mapCallback = (string) => {
//     const map =
//       {
//         "length": string.length,
//         "first": string[0],
//         "letters": {}
//       };

//     for (let i = 0; i < string.length; i++) {
//       map.letters[string[i]] = 1;
//     }

//     return map;
//   }

//   let numValidWordsArr = [];

//   let wordMapArr = words.map(mapCallback);
//   let wordsLength = words.length;

//   let puzzlesMapArr = puzzles.map(mapCallback);
//   let puzzlesLength = puzzles.length;

//   // current puzzle
//   let puzzle = null;

//   // mapObject vars
//   let first = null;
//   let mapObj = null;

//   // counter increment bool
//   let bool = null;

//   for (let i = 0; i < puzzlesLength; i++) {
//     puzzle = puzzlesMapArr[i];
//     numValidWordsArr.push(0); // push counter into result
//     for (let j = 0; j < wordsLength; j++) {
//       first = wordMapArr[j].first;
//       mapObj = wordMapArr[j].letters;

//       bool = true;
//       if (!(puzzle.first in mapObj)) {
//         continue;
//       }
//       for (const letter in mapObj) {
//         if (!(letter in puzzle.letters)) {
//           bool = false;
//           break;
//         }
//       }
//       if (bool) {
//         numValidWordsArr[i]++;
//       }
//     }
//   }

//   return numValidWordsArr;
// };

console.log(findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]));
console.log(findNumOfValidWords(["apple","pleas","please"], ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]));