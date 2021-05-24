5/24
58. Length of Last Word

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5

Example 2:
Input: s = " "
Output: 0


//return the length of the last word
//if no last word return 0

//string to array
//find length of last word


var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};


 .trim -> removes any whitespaces from beginning or end of string (just in case)
 .split -> from string to Array..(' with space inbetween to separate each word ')
 .pop -> removes and returns the last Element
 .length -> length of .pop 




 

5/24
136. Single Number 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1


//non empty array of numbers
//find the number that does not repeat

//loop through array
//sort array
//check if next number is the same 

var singleNumber = function(nums) {
    nums.sort((a,b) => a - b)    //sorts array....placing numbers in ascending order
    for(let i = 0;i < nums.length;i += 2)   //for loop goes through whole array
    if(nums[i] !== nums[i+1]) return nums[i];    //if the first nums is NOT equal to next nums .... return nums 
}






5/24      - MEDIUM LEVEL
287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [1,1]
Output: 1

Example 4:
Input: nums = [1,1,2]
Output: 1

//find repeated number

//sort and loop through
//compare nums[i] to nums[i+1]
var findDuplicate = function(nums) {
    nums.sort((a,b) => a-b) //sort method
  
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) return nums[i] //compares num and next num to each other 
  }
};

5/24
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

//does array contain duplicates?
//if duplicate return true
//no duplicates return false

//sort array
//loop through array
//does nums[1] == nums[1+1]?


const containsDuplicate = nums => {
    nums = nums.sort()
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] === nums[i]) {
        return true
      }
    }
    return false
}
