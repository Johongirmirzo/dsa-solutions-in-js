/**
 *  1. Problem
 *      Function takes 2 inputs "nums" array of integers and "target" target that to be searched fir within "nums" array
 *      Function should return the index in which target is found, if target can't be found it should return -1
 *
 *
 *  2. Algorithm
 *      define function named findTarget (nums, left=0, right=nums.length - 1)
 *          find middle element by computing Math->floor((right + left) / 2)
 *          if nums[middle] is equal to target return middle
 *          else if target is larger than middle
 *              call findTarget(nums, left, middle - 1)
 *          else
 *              call findTarget(nums, middle + 1, right)
 *          return -1
 *
 */

const findTarget = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1

  const middle = Math.floor((right + left) / 2)
  if (nums[middle] === target) {
    return middle
  } else if (nums[middle] < target) {
    return findTarget(nums, target, middle + 1, right)
  } else {
    return findTarget(nums, target, left, middle - 1)
  }
}
console.log(findTarget([-1, 0, 3, 5, 9, 12], 9))
console.log(findTarget([-1, 0, 3, 5, 9, 12], 2))
