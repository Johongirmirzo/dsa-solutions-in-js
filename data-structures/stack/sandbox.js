// Output: [1,1,4,2,1,1,0,0]

// [30,40,50,60]
// Output: [1,1,1,0]

// [30,60,90]
// Output: [1,1,0]

const monotonicIncreasingStack = (nums) => {
  const stack = []
  for (const num of nums) {
    while (stack.length && stack[stack.length - 1] > num) {
      stack.pop()
    }
    stack.push(num)
  }
  return stack
}
// console.log(monotonicIncreasingStack([1, 7, 9, 5]))

const monotonicDecreasingStack = (nums) => {
  const stack = []
  for (const num of nums) {
    while (stack.length && stack[stack.length - 1] < num) {
      stack.pop()
    }
    stack.push(num)
  }
  return stack
}

// console.log(monotonicDecreasingStack([3, 1, 4, 1, 5, 9, 2, 6]))
