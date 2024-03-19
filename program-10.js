// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const str = "This is a demo String find the largest word from it";
const newArr = str.split(" ");

function findLongestWord(arr) {
  return arr.reduce(function (largestWord, word) {
    if (word.length > largestWord.length) {
      return word;
    }
    return largestWord;
  });
}

console.log(findLongestWord(newArr));
