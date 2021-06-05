const uniquePaths = (m, n) => {
  const BTree = 

}


// class solution, works but tooooooo slow
// debug
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 3)); // 6
console.log(uniquePaths(23, 12)); // 6
console.log(uniquePaths(51, 9)); // a lot

// class BTree {
//   constructor(m, n) {
//     this.head = new BTNode(m, n);
//   }
// }

// class BTNode {
//   constructor(m, n) {
//     c += (m === 1 && n === 1) ? 1 : 0
//     this.left = m > 1 ? new BTNode(m-1, n) : null
//     this.right = n > 1 ? new BTNode(m, n-1) : null
//   }
// }
// let c;
// const uniquePaths = (m, n) => {
//   c = 0;
//   new BTree(m, n);
//   return c;
// }

// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// const uniquePaths = (m, n, c = 0) => {
//    if (m === 1 && n === 1) {
//      c++;
//      return c;
//    }
//    if (m > 1) {
//      c = uniquePaths(m - 1, n, c)
//    }
//    if (n > 1) {
//      c = uniquePaths(m, n - 1, c)
//    }
//    return c;   
// };
// works, but not accepted. Runtime too long.
// Two paths from here: find way to memoize recursive function or figure out a binary tree

// BINARY TREE

// BINARY TREE NODES

// CARGO (value)
// LEFT(left btnode || NULL)
// RIGHT(right btnode || NULL)