let visited;
let flag;
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  flag = false;
  const height = board.length;
  const width = board[0].length;
  const init = word[0];
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      if (board[x][y] !== init) {
        continue;
      }
      if (word.length === 1) {
        return true;
      }
      coords = [x,y];
      history = new Set();
      history.add(coords);
      let i = 1;
      recursive(board, word, coords, i, history)
      if (flag) {
        return true;
      }
    }
  }
  return false;
};

const recursive = (board, word, c, i, h) => { // c = coordinated, i = index of word (refers to letter to search for), h = history of coordinates (set)
  h.add(c.join(','));
  if (c[0] > 0 && board[c[0] - 1][c[1]] === word[i]) { // [-1, 0]
    if (!h.has([c[0] - 1, c[1]].join(','))) {
      if (i === word.length - 1) {
        flag = true;
        return;
      }
      recursive(board, word, [c[0] - 1, c[1]], i + 1, h);
      h.delete([c[0] - 1, c[1]].join(','));
    }
  }
  if (c[0] < board.length - 1 && board[c[0] + 1][c[1]] === word[i]) { // [+1, 0]
    if (!h.has([c[0] + 1, c[1]].join(','))) {
      if (i === word.length - 1) {
        flag = true;
        return;
      }
      recursive(board, word, [c[0] + 1, c[1]], i + 1, h);
      h.delete([c[0] + 1, c[1]].join(','));
    }
  }
  if (c[1] > 0 && board[c[0]][c[1] - 1] === word[i]) { // [0, -1]
    if (!h.has([c[0], c[1] - 1].join(','))) {
      if (i === word.length - 1) {
        flag = true;
        return;
      }
      recursive(board, word, [c[0], c[1] - 1], i + 1, h);
      h.delete([c[0], c[1] - 1].join(','))
    }
  }
  if (c[1] < board[0].length - 1 && board[c[0]][c[1] + 1] === word[i]) { // [0, +1]
    if (!h.has([c[0], c[1] + 1].join(','))) {
      if (i === word.length - 1) {
        flag = true;
        return;
      }
      recursive(board, word, [c[0], c[1] + 1], i + 1, h);
      h.delete([c[0], c[1] + 1].join(','));
    }
  }
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")); // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB")) // false
console.log(exist([["A","B"],["C","D"]],"ABCD")) // false
console.log(exist([["A","B"],["C","D"]],"ACDB")) // true

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS")); // true