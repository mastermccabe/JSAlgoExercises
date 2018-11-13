// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//iterative

//memoization 
const fibHash = {}

function fib(n) {


  if (n in fibHash) return fibHash[n]

  if (n < 2) return n

  fibHash[n] = fib(n - 1) + fib(n - 2)
  console.log(fibHash)
  return fib(n - 1) + fib(n - 2)


}

module.exports = fib;


// //linear runtime
// let arr = [0, 1]
// for (let i = 1; i < n; i++) {
//   arr.push(arr[i - 1] + arr[i])
//
// }
// return arr[n]