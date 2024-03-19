// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

function groupByProperty(arr, prop) {
  const result = {};

  for (const item of arr) {
    const value = item[prop];

    if (!(value in result)) {
      result[value] = [];
    }

    result[value].push(item.id);
  }

  return result;
}

console.log(groupByProperty(arr, "name"));
