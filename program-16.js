// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

function intersection(s1, s2) {
  const intersect = new Set();

  for (let item of s1) {
    if (s2.has(item)) {
      intersect.add(item);
    }
  }

  return Array.from(intersect);
}

console.log(intersection(set1, set2));
