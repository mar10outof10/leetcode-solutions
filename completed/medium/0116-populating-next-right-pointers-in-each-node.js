/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = root => {
  if (!root) {
    return null;
  }

  let current;
  let tree = [];
  let queue = [root];

  while (queue.length) {
    current = queue.shift();
    tree.push(current);
    current.left ? queue.push(current.left) : null;
    current.right ? queue.push(current.right) : null;
  }
  for (let i = 1; i < tree.length; i++) {
    let pow = Math.floor(Math.log2(i)) + 1; // used to find upper end 
    let end = (2 ** pow) - 2 // index where right edge of tree is reached
    if (i != end) {
      tree[i].next = tree[i + 1];
    }
  }

  return root;
};