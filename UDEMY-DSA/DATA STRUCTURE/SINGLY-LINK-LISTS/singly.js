// piece of data --> val
// reference to next node --> next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // if list are blank then head=tail
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if list is not blank then tail= recently last element ...
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// bad prac
// let first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("SHIBU");
// first.next.next.next = new Node("chapagain");
// console.log(first.next);

let list = new SinglyLinkedList();
list.push("shiva");
list.push("chapagain");
list.push(69);
// console.log(list);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.head.next.next);

list.traverse();
