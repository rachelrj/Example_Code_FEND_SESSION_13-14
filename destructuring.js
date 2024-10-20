// ARRAYS

const ex1 = [1, 2, 3];
const [a, b, c] = ex1;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const ex2 = [1, 2, 3, 4];
const [d, , g] = ex2;
console.log(d); // 1
console.log(g); // 3

// REST Operator
// Allows you to collect multiple elements into a single array or object
const ex3 = [1, 2, 3, 4];
const [h, ...newArr] = ex3;
console.log(h); // 1
console.log(newArr); // [2, 3, 4]

// OBJECTS

const person1 = { firstName: "Alice", age: 25 };
const { firstName, age } = person1;
console.log(firstName); // Alice
console.log(age); // 25

const person2 = { name: "Elizabeth", age: 35 };
const { name: personName, age: personAge } = person2;
console.log(personName); // Elizabeth
console.log(personAge); // 35
