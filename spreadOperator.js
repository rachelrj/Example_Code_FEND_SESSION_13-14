// Spread in Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Spread in Objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { a: 1, b: 3, c: 4 }

// Spread operator in functons
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 10
/*
    The .reduce() method in JavaScript is used to reduce an array
    to a single value by applying a function to each element of the
    array. The function takes two arguments: an accumulator (acc)
    and the current value (curr). 
*/
