// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//use breadthfirst

function levelWidth(root) {
  let count = 0
  const counters = [0]
  const arr = [root, 's']

  while (arr.length > 1) {
    const node = arr.shift()
    if (node === 's') {
      counters.push(0)
      arr.push('s')
    } else {
      // for (let child in node.children) {
      //   arr.push(child)
      // }
      arr.push(...node.children);
      counters[counters.length - 1]++;

    }
  }
  console.log(counters)
  return counters;


}

module.exports = levelWidth;