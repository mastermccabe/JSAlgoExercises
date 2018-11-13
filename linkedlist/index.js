// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.insertAt(data, 0)
    // this.head = new Node(data, this.head);
  }
  size() {
    let length = 0
    let node = this.head
    while (node) {
      length++
      node = node.next;
    }
    return length
  }

  getFirst() {
    return this.head
  }


  getLast() {
    return this.getAt(this.size() - 1)
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head
    // while (node.next) {
    //   node = node.next
    // }
    // return node
  }

  clear() {
    if (!this.head) {
      return null;
    } else {
      this.head = null
    }

  }

  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next;
  }


  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null;
      return;
    } else {
      let prevNode = this.head;
      let node = this.head.next;
      while (node.next) {
        prevNode = node;
        node = node.next;
      }
      prevNode.next = null;
    }

  }

  insertLast(data) {
    const lastNode = this.getLast()
    if (!lastNode) {
      this.head = new Node(data)
    } else {
      lastNode.next = new Node(data)
    }
  }

  getAt(n) {
    if (!this.head) return null;
    let node = this.head
    let counter = 0

    while (node) {
      if (counter === n) {
        return node
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return
    }
    if (n === 0) {
      if (this.head.next) {
        this.head = this.head.next
        return
      }
    }
    const prevNode = this.getAt(n - 1)
    if (!prevNode || !prevNode.next) return

    prevNode.next = prevNode.next.next
  }

  insertAt(data, index) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    const prevNode = this.getAt(index - 1) || this.getLast();

    prevNode.next = new Node(data, prevNode.next)
    return
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = {
  Node,
  LinkedList
};

const nodeOne = new Node(5)
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list.insertFirst(35);
// console.log(list)