// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function getCombo(str) {
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      ans.push(str.slice(i, j + 1));
    }
  }
  return ans;
}

const finalAns = getCombo("Dog".toLowerCase());
console.log(finalAns);
