/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  if (!head || head.next === null) {
    return head;
  }

  let left = [];
  let right = [];
  let curr = head;
  let c = -1;


  while (true) {
    if (curr.val >= x) {
      right.push(curr);
    } else {
      left.push(curr);
      c++;
    }
    if (!curr.next) {
      break;
    }
    curr = curr.next;
  }
  
  if (left.length) {
    for (let i = 0; i < left.length - 1; i++) {
      left[i].next = left[i+ 1];
    }
  }

  if (c > -1 && right.length) {
    left[c].next = right[0];
  }

  if (right.length) {
    for (let i = 0; i < right.length - 1; i++) {
      right[i].next = right[i + 1];
    }
    right[right.length - 1].next = null;
  }
  if (left.length) {
    return left[0];
  } else {
    return right[0];
  }
};