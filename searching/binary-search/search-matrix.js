/**
 *  1. Problem
 *      function takes an input of integer "matrix"; mxn
 *          - Each row is sorted in ascending order
 *          - The first integer of each row is greater than the last integer/item of the previous row
 *
 *      With the given target, return true if target is in matrix else false
 *
 *      Time Complexity required is O(log(m*n))
 *
 *  2. Algorithms
 *      1. create variable called first set to 0
 *      2. create variable called last set to array.length - 1
 *      3. set up loop that iterates over until left <= right
 *          find middle row using Math.floor((left + right) / 2)
 *          if target >= arr[middle]
 *              colLeft = 0
 *              colRight = arr[middle].length - 1
 *              while(colLeft <= colRight)
 *                  middle = Math.floor((colLeft+  colRight) / 2)
 *                  if arr[middle][middle] === target
 *                      return true
 *                  else if arr[middle][middle] > target
 *                      right = middle - 1
 *                  else
 *                      left = middle + 1
 *          else if target < arr[middle]
 *              right = middle - 1
 *
 *  3. Algorithmic Complexity
 *        This Algorithm achieves O(log(n*m)) time complexity. Because for each row of m it's looping length of n
 *        And in each iteration until target is found, half the rows are eliminated
 *
 */

const searchMatrix = (matrix, target) => {
  let topRow = 0
  let bottomRow = matrix.length - 1
  while (topRow <= bottomRow) {
    const rowMiddle = Math.floor((topRow + bottomRow) / 2)
    // console.log(topRow, bottomRow, rowMiddle)
    if (matrix[rowMiddle][0] === target) {
      return true
    }
    if (matrix[rowMiddle][0] > target) {
      bottomRow = rowMiddle - 1
    } else {
      console.log(matrix[rowMiddle], rowMiddle)
      let colLeft = 0
      let colRight = matrix[rowMiddle].length - 1
      while (colLeft <= colRight) {
        const colMiddle = Math.floor((colLeft + colRight) / 2)
        if (matrix[rowMiddle][colMiddle] === target) {
          return true
        } else if (matrix[rowMiddle][colMiddle] > target) {
          colRight = colMiddle - 1
        } else {
          colLeft = colMiddle + 1
        }
      }
      topRow = rowMiddle + 1
    }
  }
  return false
}
console.log(
  searchMatrix(
    [
      [-8, -7, -5, -3, -3, -1, 1],
      [2, 2, 2, 3, 3, 5, 7],
      [8, 9, 11, 11, 13, 15, 17],
      [18, 18, 18, 20, 20, 20, 21],
      [23, 24, 26, 26, 26, 27, 27],
      [28, 29, 29, 30, 32, 32, 34],
    ],
    -5
  )
)
console.log(
  searchMatrix(
    [
      [1, 9, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    9
  )
)
