/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  if (n === 0) {
    return head;
  }

  let curr = head;
  let q = [];

  while (curr) {
    q.push(curr);
    curr = curr.next;
    if (q.length > n + 1) {
      q.shift();
    }
  }
  console.log(q);
  if (q[0].next) {
    if (q[0].next.next) {
      q[0].next = q[n];
      return head;
    } else {
      return head.next;
    }
  } else {
    if (n === 1) {
      return head.next; // remove first node
    }
  }
  head.next = null;
  return head;
};