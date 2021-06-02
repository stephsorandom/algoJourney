283. Move Zeroes
Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

//move all 0 to end of array
//do not make new array 


//loop through...then nums[i] <= 1 i++   
//
var moveZeroes = function(nums) {
  let count = 0;
  for (let i=0; i < nums.length; i++) {
    if(nums[i] != 0) {
      nums[count++] = nums[i]
    }
  }
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};