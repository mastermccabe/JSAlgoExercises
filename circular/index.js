// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let stay = list.head
  let runner = list.head.next

  while (runner.next && runner.next.next) {
    if (stay !== runner) {
      stay = stay.next
      runner = runner.next.next
    } else return true
  }


}

module.exports = circular;