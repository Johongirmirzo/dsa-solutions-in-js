const sandbox = (height) => {
  let maxArea = -Infinity
  let leftPointer = 0
  let rightPointer = height.length - 1
  while (leftPointer < rightPointer) {
    const leftElement = height[leftPointer]
    const rightElement = height[rightPointer]
    if (leftElement == rightElement) {
      maxArea = Math.max(rightElement * rightPointer, maxArea)
      leftPointer++
      rightPointer--
    } else if (leftElement > rightElement) {
      console.log(leftElement, rightElement, rightPointer)
      maxArea = Math.max(
        rightElement * (rightPointer - Math.max(1, leftPointer)),
        maxArea
      )
      rightPointer--
    } else {
      maxArea = Math.max(leftElement * Math.max(1, leftPointer), maxArea)
      leftPointer++
    }
  }
  return maxArea
}
console.log(sandbox([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(sandbox([1, 1]))
console.log(sandbox[(9, 4, 3, 8)])
