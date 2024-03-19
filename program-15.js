// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function isSubset(s1, s2) {
  for (let item of s1) {
    if (!s2.has(item)) {
      return false;
    }
  }
  return true;
}

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);
console.log(isSubset(set1, set2));

set1 = new Set([3, 4]);
set2 = new Set([1, 2, 3, 4, 5]);
console.log(isSubset(set1, set2));
