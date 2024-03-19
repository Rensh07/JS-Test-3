// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6

const arr = [
  {
    product: "Laptop",
    price: 1000,
    quantity: 2,
  },
  {
    product: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    product: "Monitor",
    price: 250,
    quantity: 1,
  },
];

function calc(arr, property) {
  return arr.reduce((total, obj) => total + obj[property], 0);
}

console.log(`Total value for "price": ${calc(arr, "price")}`);
console.log(`Total value for "quantity": ${calc(arr, "quantity")}`);
