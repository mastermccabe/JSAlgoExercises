// while (start_col <= end_col && start_row <= end_row) {
//   //top row
//   for (let i = start_col; i <= end_col; i++) {
//     spiral[start_row][i] = counter;
//     counter++
//   }
//   start_row++;
//   // right col
//   for (let i = start_row; i <= end_row; i++) {
//     spiral[i][end_col] = counter
//     counter++
//   }
//   end_col--;
//   // bottom row
//   for (let i = end_col; i >= start_col; i--) {
//     spiral[end_row][i] = counter;
//     counter++
//   }
//   end_row--;
//   // left col
//   for (let i = end_row; i >= start_row; i--) {
//     spiral[i][start_col] = counter;
//     counter++
//   }
//   start_col++;
// }
// console.log(spiral)
// return spiral

//k = 24
//+,-,*,/
function math24(nums, k) {
  let arr = [nums[0], 's']
  let i = 1
  while (arr.length > 1 && i < 3) {
    let num = arr.shift()
    if (num === 's') {
      arr.push('s')
    } else {
      console.log("here", num)
      arr.push(num + nums[i])
      arr.push(num - nums[i])
      arr.push(num * nums[i])
      arr.push(num / nums[i])
      i++
    }
  }
  return arr

  // while (arr.length > 1)
  // arr.unshift(sum1 + nums[1])
  // arr.unshift(sum2 - nums[1])
  // arr.unshift(sum3 * nums[1])
  // arr.unshift(sum4 / nums[1])

}
console.log(math24([2, 3, 4], 2))