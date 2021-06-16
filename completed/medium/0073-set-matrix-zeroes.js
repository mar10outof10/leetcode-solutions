/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  const nilCol = new Set();
  for (let i = 0; i < matrix.length; i++) {
    let clear = false;
    for (let j = 0; j <matrix[0].length; j++) {
      if (nilCol.has(j)) {
        if (matrix[i][j]){
          matrix[i][j] = 0;
        } else {
          clear = true;
        }
      } else {
        if (!matrix[i][j]) {
          clear = true;
          nilCol.add(j);
          for (let k = 0; k < i; k++) {
            matrix[k][j] = 0;
          }
        }
      }
    }
    if (clear) {
      let c = 0;
      while (c < matrix[0].length) {
        matrix[i][c] = 0;
        c++;
      }
    }
  }
};

// // debug
// const matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]
// setZeroes(matrix);
// console.log(matrix);