/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let hist;
let island;
const solve = (board) => {
  hist = new Set(); // i refers to row (y), j to column (x)
  for (let i = 1; i < board.length - 1; i++) { // start at 2nd row, end at 2nd last row
    for (let j = 1; j < board[0].length - 1; j++) { // start at 2nd column, end at second last column;
      if (board[i][j] === "X") {
        continue;
      }
      hist = new Set();
      if (!check(i, j, board)) {
        for (ele of hist) {
          let coords = ele.split(',');
          board[coords[0]][coords[1]] = "X";
        }
      }
    }
  }
  console.log(board);
};
const check = (x, y, board) => {
  if (hist.has(`${x},${y}`)) {
    return false;
  }
  if (board[x][y] === "X") {
    return false;
  }
  if (x === 0 || y === 0 || x === board.length - 1 || y === board[0].length - 1) {
    return true;
  }
  hist.add([x,y].join(','));
  if (check(x - 1, y, board) || check(x + 1, y, board) || check(x, y - 1, board) || check(x, y + 1, board)) {
    return true;
  }
  return false;
};

solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]])
solve([["O","X","O"],["X","O","X"],["O","X","O"]]);
solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]);
