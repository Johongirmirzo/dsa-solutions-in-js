/**
 *  1. Problem
 *      function takes array of positive integers where each element is vertical line. return max area of two vertica lines
 *      such that when x-axis is formed can contain the most water.
 *
 *  2. Algorithm
 *      leftPointer = 0
 *      rightPointer = arr.length - 1
 *      maxArea = -Infinity
 *      while(leftPointer < rightPointer)
 *          if arr[leftPointer] >= arr[rightPointer]
 *              if maxArea < arr[rightPointer] * (rightPointer - leftPointer)
 *             rightPointer--
 *          elseif arr[leftPointer] < arr[rightPointer]
 *              if maxArea < arr[leftPointer] * (rightPointer - leftPointer)
 *             leftPointer++
 *
 *      return maxArea
 */

const maxArea = (height) => {
  let leftPointer = 0
  let rightPointer = height.length - 1
  let currentMaxArea = -Infinity
  while (leftPointer < rightPointer) {
    if (height[leftPointer] >= height[rightPointer]) {
      currentMaxArea = Math.max(
        currentMaxArea,
        height[rightPointer] * (rightPointer - leftPointer)
      )
      rightPointer--
    } else if (height[leftPointer] < height[rightPointer]) {
      currentMaxArea = Math.max(
        currentMaxArea,
        height[leftPointer] * (rightPointer - leftPointer || 1)
      )
    }
  }
  return currentMaxArea
}

console.log(maxArea([1, 1]))
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
