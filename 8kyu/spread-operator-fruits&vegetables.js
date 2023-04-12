// Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

// Solution

const produce = [...fruits, ...vegetables];

console.log(produce);

// old way of doing things

// Combining arrays with concat
// One example of when the spread operator can be useful is when combining arrays.

// If you’ve ever needed to combine multiple arrays, prior to the spread operator, you were forced to use the Array’s concat() method.

// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];
// const produce = fruits.concat(vegetables);
// console.log(produce);
