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
  var arr = nums.sort()    //sorts array....placing numbers in ascending order
    for (let i=0; i < nums.length; i++) {   //for loop goes through whole array
      if (nums[i] !== nums[i+1]) return nums[i]    //if the first nums is NOT equal to next nums .... return nums 
    }
};
