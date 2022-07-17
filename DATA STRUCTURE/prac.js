// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // let el = new Node(1);
// // el.next = new Node(2);
// // el.next.next = new Node(3);
// // console.log(el);
// // chaining one after another ...

// // implement singly list link
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//       return this;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//   }
// }
// let single = new SinglyLinkedList();
// single.push(3);
// // single.push(4);
// // single.push(5);
// // single.push(6);
// console.log(single);

// prac --->
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      return true;
    }
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
let single = new SinglyLinkList();
single.push(3);
single.push(4);
single.push(5);
single.push(6);
// console.log(single);
// console.log(single.head);
// console.log(single.tail); // Node { val: 6, next: null }
console.log(single.traverse());
