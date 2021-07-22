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
  if (n === 0) { // nothing deleted
    return head; 
  }

  let curr = head;
  let q = []; // queue of max length (n + 1) to include (up to) every node in the linked list from index [x - 1] where x is the index of the node to be deleted to the final node


  while (curr) {
    q.push(curr);
    curr = curr.next;
    if (q.length > n + 1) {
      q.shift();
    }
  }

  if (q[0] === head) { // valid either when n > LinkedList.length or if n === LinkedList.length
    if (q.length < n) { // n is longer than length of linked list therefore no change, return head
      return head;
    } else if (q.length === n) { // if q === n then the head is the node to be removed; head.next is the new head
      return head.next;
    }
  }
  // otherwise, the deleted node will be in index [1] in the queue
  q[0].next = q[0].next.next; // sets q[0].next to q[2] deleting [1] from the linked list
  return head;
};
