// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//count up from 1 to n^2, nXn array,
// start col  ---- end col
// start row --- end row
//start row = 0
//end row = n-1

function matrix(n) {
  let spiral = []
  let start_col = 0
  let end_col = n - 1
  let start_row = 0
  let end_row = n - 1
  let counter = 1;

  for (let i = 0; i < n; i++) {
    spiral.push([])

  }
  //top spiral[row][col]
  while (start_col <= end_col && start_row <= end_row) {
    //top
    for (let i = start_col; i <= end_col; i++) {
      spiral[start_row][i] = counter;
      counter++;
    }
    start_row++;

    //right column
    for (let i = start_row; i <= end_row; i++) {
      spiral[i][end_col] = counter;
      counter++
    }
    end_col--;

    //bottom row (right to left)
    for (let i = end_col; i >= start_col; i--) {
      spiral[end_row][i] = counter;
      counter++;
    }
    end_row--;

    //left col (bottom up)
    for (let i = end_row; i >= start_row; i--) {
      spiral[i][start_col] = counter;
      counter++
    }
    start_col++


  }
  console.log(spiral)
  return spiral
  // console.log(spiral)


}

module.exports = matrix;


//
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