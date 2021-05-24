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