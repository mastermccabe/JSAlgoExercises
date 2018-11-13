// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let runner = list.head
  let returnNode = list.head
  let i = 0
  while (runner.next && i < n) {
    runner = runner.next
    i++
  }
  while (runner.next) {
    runner = runner.next
    returnNode = returnNode.next
  }
  return returnNode



}

module.exports = fromLast;