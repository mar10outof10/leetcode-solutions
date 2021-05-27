/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let head = null,
      curr = null,
      sum = 0,
      carry = 0,
      num,
      node = null;
  while (l1 || l2) {
    sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry
    num = parseInt(sum % 10);
    carry = parseInt(sum / 10);

    node = new ListNode(num);
    if (!head) {
      head = node;
    }
    if (curr) {
      curr.next = node;
    }
    curr = node;
  }

  if (carry) {
    node = new ListNode(carry);
    curr.next = node;
    curr = node;
  }

  return head;
};




// /**
//  * @param {List} l1
//  * @param {List} l2
//  * @return {List}
//  */
// const addTwoNumbers = (l1, l2, carry = 0) => {
//   let cargo = (l1.shift() + l2.shift() + carry);

//   let c = parseInt(cargo / 10); // carryover digit
//   if (!l1.length) {

//     if (!l2.length) {
//       if (cargo === 10) {
//         return [0, 1]; // special case when ending with a carryover. Cargo > 10 in this case not possible
//       }
//       return [cargo % 10]; // base case
//     }
//     return [cargo % 10].concat(addTwoNumbers([0], l2, c));

//   } else if (!l2.length) {
//     return [cargo % 10].concat(addTwoNumbers(l1, [0], c));
//   }

//   return [cargo % 10].concat(addTwoNumbers(l1, l2, c));
// };

// console.log(addTwoNumbers([2,4,3],[5,6,4]))
// console.log(addTwoNumbers([9,9,9,9,9,9,9],[9, 9, 9, 9]))
