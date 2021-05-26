242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


//anagram --> words that can be used to make other words
//return true or false


//have to compare 's'='t'
//can use ternary to compare....return (...) ? true : false
//
var isAnagram = function(s, t) {
    var s = s.split('') //.split : string --> array 
    var t = t.split('')
     // console.log(t.sort())
  return (s.sort().join('') == t.sort().join('')) ? true : false  //sort to alphabetize and join to put back as strings.....compare if true or false
};