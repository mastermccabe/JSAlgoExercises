// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []

  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, size + index))
    index += size
  }
  return chunked

} //.217s

//
// const chunkArr = []
// for (let element of array) {
//   const last = chunkArr[chunkArr.length - 1]
//   if (!last || last.length === size) {
//     chunkArr.push([element])
//   } else {
//     chunkArr[chunkArr.length - 1].push(element)
//     console.log("chunkArr[chunkArr.length - 1].length", chunkArr[chunkArr.length - 1].length, "size:", size)
//   }
//
// }
// return chunkArr //.298s
//
// }
module.exports = chunk;