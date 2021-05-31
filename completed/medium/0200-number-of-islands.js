let clone;

const nodeCheck = (i, j) => {
  if (clone[i][j] !== "0") {
    clone[i][j] = "0";
    if (clone[i][j - 1]) {
      nodeCheck(i, j - 1)
    }
    if (clone[i][j + 1]) {
      nodeCheck(i, j + 1)
    }
    if (i > 0 && clone[i - 1][j]) {
      nodeCheck(i - 1, j)
    }
    if (i < clone.length - 1 && clone[i + 1][j]) {
      nodeCheck(i + 1, j)
    }
  }
}

const numIslands = grid => {
  const h = grid.length;
  const w = grid[0].length;
  clone = [...grid]
  let islands = 0;
  for (i = 0; i < h; i++) {
    for (j = 0; j < w; j++) {
      if (clone[i][j] === "1") {
        nodeCheck(i, j);
        islands++;
      }
    }
  }
  return islands;
}
// submitted
// 88ms 60.31%
// 39.7mb, 71.72%

// debug
console.log(numIslands([["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]])) // 58
console.log(numIslands([["1"],["1"]])) // 1
console.log(numIslands([
  ["0","1","1","1","0","1","1","0","0"],
  ["0","1","0","1","0","1","0","0","0"],
  ["1","1","0","0","0","0","1","0","0"],
  ["0","0","0","1","0","1","0","0","1"]
])); // 6
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])) // 3

// HISTORICAL

// attempt #3

// const nodeCheck = (i) => {
//   if (concArr[i] !== "0") {
//     concArr[i] = "0";
//     if (concArr[i - 1] && i % w) {
//       nodeCheck(i - 1)
//     }
//     if (concArr[i + 1] && i % w !== (w - 1)) {
//       nodeCheck(i + 1)
//     }
//     if (concArr[i - w]) {
//       nodeCheck(i - w)
//     }
//     if (concArr[i + w]) {
//       nodeCheck(i + w)
//     }
//   }
// }

// const numIslands = grid => {
//   h = grid.length;
//   w = grid[0].length;
//   concArr = [];
//   let islands = 0;
//   for (const row of grid) {
//     concArr = concArr.concat(row);
//   }
//   for (i = 0; i < concArr.length; i++) {
//     if (concArr[i] === "1") {
//       nodeCheck(i);
//       islands++;
//     }
//   }
//   return islands;
// }

// attempt #2

// const nodeCheck = (i) => {
//   hist.add(i);
//   if (concArr[i] === "0") {
//     return;
//   }
//   if (i % w && !hist.has(i - 1)) {
//     nodeCheck(i - 1) // left
//   }
//   if (i % w != w - 1 && !hist.has(i + 1)) {
//     nodeCheck(i + 1) // right
//   }
//   if (i >= w && !hist.has(i - w)) {
//     nodeCheck(i - w) // up
//   }
//   if (i + w < (h * w) && !hist.has(i + w)) {
//     nodeCheck(i + w) // down
//   }
// }

// const numIslands = grid => {
//   hist = new Set();
//   h = grid.length;
//   w = grid[0].length;
//   concArr = [];
//   let islands = 0;
//   for (const row of grid) {
//     concArr = concArr.concat(row);
//   }
//   for (i = 0; i < concArr.length; i++) {
//     if (hist.has(i)) {
//       continue;
//     }
//     if (concArr[i] === "0") {
//       hist.add(i);
//       continue;
//     }
//     nodeCheck(i);
//     islands++;
//   }
//   return islands;
// }

// attempt #1

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// let coords;

// const nodeCheck = (i, j, grid) => {
//   coords.add(`${i},${j}`); // x, y coords added to set to not reiterate over historical data
//   if (grid[i][j] === "0") {
//     return;
//   }
//   if (i > 0 && !coords.has(`${i - 1},${j}`)) {
//     nodeCheck(i - 1, j, grid)
//   }
//   if (i < grid.length - 1 && !coords.has(`${i + 1},${j}`)) {
//     nodeCheck(i + 1, j, grid)
//   }
//   if (j > 0 && !coords.has(`${i},${j - 1}`)) {
//     nodeCheck(i, j - 1, grid)
//   }
//   if (j < grid[0].length - 1 && !coords.has(`${i},${j + 1}`)) {
//     nodeCheck(i, j + 1, grid)
//   }
// };

// const numIslands = grid => {
//   coords = new Set();
//   let islands = 0;
//   for (i = 0; i < grid.length; i++) {
//     for (j = 0; j < grid[0].length; j++) {
//       if (coords.has(`${i},${j}`)) {
//         continue;
//       } else if (grid[i][j] === "0") {
//         coords.add(`${i},${j}`);
//         continue;
//       }
//       nodeCheck(i, j, grid);
//       islands++;
//     }
//   }
//   return islands;
// };
// submitted
// runtime 116ms 12.33%
// memory 49.4mb, 5.05%