// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 2. Sum numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log("Sum:", sum);

// 3. Multiplication table
const number = 7;
for (let i = 1; i <= 10; i++) console.log(`${number} x ${i} = ${number * i}`);

// 4. Factorial
const n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) factorial *= i;
console.log("Factorial:", factorial);

// 5. Count even numbers
const values = [2, 5, 8, 11, 14, 17];
let evenCount = 0;
for (const value of values) if (value % 2 === 0) evenCount++;
console.log("Even count:", evenCount);
