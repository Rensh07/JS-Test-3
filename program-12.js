// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "C++",
//     "Ruby",
//     "Swift",
// ]

// Output: "JavaScript"

const arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];

function findLongestWord(arr) {
  return arr.reduce(function (largestWord, word) {
    if (word.length > largestWord.length) {
      return word;
    }
    return largestWord;
  });
}

console.log(findLongestWord(arr));
