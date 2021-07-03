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
 * @return {number}
 */
let queue;

const diameterOfBinaryTree = (root) => {
  queue = [];
  let max = 0;
  if (!root || !root.left && !root.right) {
    return 0;
  }
  traverse(root);

  for (const node of queue) {
    let left = node.left ? getHeight([node.left]) : 0;
    let right = node.right ? getHeight([node.right]) : 0;
    let total = left + right;
    if (total > max) {
      max = total;
    }
  }
  return max;
};

const getHeight = (q, height = 1) => {
  let temp = [];
  for (const node of q) {
    node.left ? temp.push(node.left) : null;
    node.right ? temp.push(node.right) : null;
  }
  if (temp.length) {
    return getHeight(temp, height + 1);
  } else {
    return height;
  }
}

const traverse = (node) => {
  queue.push(node);
  if (node.left) {
    traverse(node.left);
  }
  if (node.right) {
    traverse(node.right);
  }
}


// longest path always reaches leaf of highest height