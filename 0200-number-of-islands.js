/**
 * @param {character[][]} grid
 * @return {number}
 */
let coords = new Set();

const nodeCheck = (i, j, grid) => {
  coords.add(`${i},${j}`); // x, y coords added to set to not reiterate over historical data
  if (grid[i][j] === "0") {
    return;
  }
  if (i > 0 && !coords.has(`${i - 1},${j}`)) {
    nodeCheck(i - 1, j, grid)
  }
  if (i < grid.length - 1 && !coords.has(`${i + 1},${j}`)) {
    nodeCheck(i + 1, j, grid)
  }
  if (j > 0 && !coords.has(`${i},${j - 1}`)) {
    nodeCheck(i, j - 1, grid)
  }
  if (j < grid[0].length - 1 && !coords.has(`${i},${j + 1}`)) {
    nodeCheck(i, j + 1, grid)
  }
};

const numIslands = grid => {
  coords = new Set();
  let islands = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (coords.has(`${i},${j}`)) {

        continue;
      } else if (grid[i][j] === "0") {
        coords.add(`${i},${j}`);
        continue;
      }
      nodeCheck(i, j, grid);
      islands++;
    }
  }
  return islands;
};
// submitted
// runtime 116ms 12.33%
// memory 49.4mb, 5.05%

console.log(numIslands([
  ["0","1","1","1","0","1","1","0","0"],
  ["0","1","0","1","0","1","0","0","0"],
  ["1","1","0","0","0","0","1","0","0"],
  ["0","0","0","1","0","1","0","0","1"]
]));

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))