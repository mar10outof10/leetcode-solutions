// answer in progress. Logic is sound up to while loop which is completely and totally unfinished
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
const mergeTwoList = (l1, l2) => {
  // second if statement to handle 3 edge cases; both params having no value, and each param having no value
  if (typeof l1.value !== "number") {
    if (typeof l2.value !== "number") {
      return new ListNode(null); //both null, return a single null listnode
    }
    return l1;
  } else if (typeof l2.value !== "number") {
    return l2;
  }
  // both listnodes now guaranteed to have value
  // init linked list vars
  let head;
  let curr;
  // init head
  if (l1.value <= l2.value) {
    head = new ListNode(l1.value);
    l1 = l1.next;
    if (!l1) { // in case that was the only value in l1, concats l2 to head.
      head.next = l2;
      return head;
    }
  } else {
    head = new ListNode(l2.value);
    l2 = l2.next;
    if (!l2) {
      head.next = l1;
      return head;
    }
  }
  // both list nodes still guaranteed to have value, no guarantee .next is not null

  while (typeof l1.value === "number" || typeof l2.value === "number") {
    if (l1.value <= l2.value) {
      if (head.next) { // head next exists? curr is set
        curr.next = new ListNode(l1.value);
        curr = curr.next;

        if (l1.next) {
          l1 = l1.next
        } else {
          curr.next = l2;
          break;
        }

      } else { // head.next does not exist
        head.next = new ListNode(l1.value);
        curr = head.next;

        if (l1.next) {
          l1 = l1.next
        } else {
          curr.next = l2;
          break;
        }

      }

    } else { // l2 value implicitly greater
    
    }
  }



}

// first accepted answer, submitted successfully.
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
 const mergeTwoLists = (l1, l2) => {

  if ((!l1 || l1.val === null) && (!l2 || l2.val === null)) {
      return l1;
    } else if (!l1 || typeof l1.val === null) {
      return l2;
    } else if (!l2 || typeof l2.val === null) {
      return l1;
    }

    let head;
    let curr;

    if (l1.val <= l2.val) {
      head = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      head = new ListNode(l2.val);
      l2 = l2.next;
    }

   while (l1 || l2) {
      if (!l2) {
        if (!head.next) {
          head.next = new ListNode(l1.val);
          curr = head.next;
          l1 = l1.next;
        } else {
          curr.next = new ListNode(l1.val);
          curr = curr.next;
          l1 = l1.next;
        }
          continue;
      } else if (!l1) {
        if (!head.next) {
          head.next = new ListNode(l2.val);
          curr = head.next;
          l2 = l2.next;
        } else {
          curr.next = new ListNode(l2.val);
          curr = curr.next;
          l2 = l2.next;
        }
          continue;
      }
      if (l1 && l1.val <= l2.val) {
        if (!head.next) {
          head.next = new ListNode(l1.val);
          curr = head.next;
          l1 = l1.next;
        } else {
          curr.next = new ListNode(l1.val);
          curr = curr.next;
          l1 = l1.next;
        }
      } else {
        if (!head.next) {
          head.next = new ListNode(l2.val);
          curr = head.next;
          l2 = l2.next;
        } else {
          curr.next = new ListNode(l2.val);
          curr = curr.next;
          l2 = l2.next;
        }
      }
    }

    return head;
};
// accepted
// runtime: 88ms faster than 80.51%
// memory: 41mb, less than 7.83%