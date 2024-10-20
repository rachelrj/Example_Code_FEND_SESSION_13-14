// Paste into browser

const start = performance.now();

for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

const end = performance.now();

const timeTaken = end - start;
console.log(`Time taken to execute the code: ${timeTaken} milliseconds`);
