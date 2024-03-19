// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount1 = {};
  const charCount2 = {};

  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (let char in charCount1) {
    if (!(char in charCount2) || charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("evil", "vile"));
console.log(areAnagrams("a gentleman", "elegant man"));
console.log(areAnagrams("eleven plus two", "twelve plus one"));
