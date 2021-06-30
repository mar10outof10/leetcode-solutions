/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (root === null) {
    return false;
  }
  if (recurse(root, targetSum)) {
    return true;
  }
  return false;
};

const recurse = (node, tSum, total = 0) => {
  let t = total + node.val;
  if (!node.left && !node.right) {
    if (tSum === t) {
      return true;
    }
  } else {
    if (node.left) {
      if (recurse(node.left, tSum, t)) {
        return true;
      }
    }
    if (node.right) {
      if (recurse(node.right, tSum, t)) {
        return true;
      }
    }
  }
  return false;
}