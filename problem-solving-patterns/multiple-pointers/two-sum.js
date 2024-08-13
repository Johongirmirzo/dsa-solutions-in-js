/**
 *  1. Problem
 *      function takes two arguments "numbers" sorted array of integers in ascending order and "target" element. Function
 *      should return indices of two elements in the array where their sum is equal to "target". Add 1 to each return index
 *      - NOTE:
 *          it's guarenteed that there's exactly one solution
 *
 *  2. Examples
 *      twoSum([1,9,20,50], 10) [0,1]
 *
 *  3. Algorithm
 *      1. create two variables
 *          - one named leftPointer set to 0
 *          - the oter named rightPointer set to numbers.length - 1
 *      2. while(true)
 *          sum = numbers[leftPointer] + numbers[rightPointer]
 *          if sum == target return [leftPointer, rightPointer]
 *          else if sum > target  then
 *              rightPointer -= 1
 *          else
 *              leftPointer += 1
 *
 *
 *  4. Refactor
 *
 *
 */

// Two pointer solution
const twoSumTwoPointer = (nums, target) => {
  let leftPointer = 0
  let rightPointer = nums.length - 1
  while (leftPointer < rightPointer) {
    const sum = nums[leftPointer] + nums[rightPointer]
    if (sum === target) return [leftPointer + 1, rightPointer + 1]
    else if (sum > target) {
      rightPointer -= 1
    } else {
      leftPointer += 1
    }
  }
}

console.log(twoSumTwoPointer([2, 7, 11, 15], 9))
console.log(twoSumTwoPointer([2, 3, 4], 6))
console.log(twoSumTwoPointer([-1, 0], -1))

// Map two sum solution
const twoSumMap = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const prevIndex = map.get(nums[i])
    if (prevIndex >= 0) {
      return [prevIndex + 1, i + 1]
    }
    map.set(target - nums[i], i)
  }
}

// console.log(twoSumMap([2, 7, 11, 15], 9))
// console.log(twoSumMap([2, 3, 4], 6))
// console.log(twoSumMap([-1, 0], -1))
