/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  matrixC = [...matrix]
  let res = [];
  pointer = "r"
  while (matrixC.length > 0) {
    switch (pointer) {
      case ("r"):
        res = res.concat(matrixC.shift());
        pointer = "d";
        break;
      case ("d"):
        if (matrixC[0].length === 1) {
          for (let i = 0; i < matrixC.length; i++) {
            res = res.concat(matrixC.shift());
          }
        } else {
          for (const row of matrixC) {
            res.push(row.pop());
          }
          pointer = "l";
        }
        break;
      case ("l"):
        res = res.concat(matrixC.pop().reverse())
        pointer = "u";
        break;
      case ("u"):
        if (matrixC[0].length === 1) {
          for (let i = 0; i < matrixC.length; i++) {
            res = res.concat(matrixC.pop());
          }
        } else {
          for (let i = matrixC.length -1; i >= 0; i--) {
            res.push(matrixC[i].shift());
          }
          pointer = "r";
        }
        break;
    }
  }
  return res;
}

// submitted
// 72 ms 88.91%
// 38.4mb 55.26%

console.log(spiralOrder([[7],[9],[6]]));
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));