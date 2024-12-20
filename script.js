// reverse a string

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("cow"));

//count characters

function count(words) {
  return words.length;
}

console.log(count("elephant"));

//capitalize words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello "));

//finding max and min in array
function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

console.log(findMaximum([3, 5, 7, 2]));
console.log(findMinimum([3, 7, 2, 8]));

//calculating sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num);
}

console.log(sumArray([3, 5, 44, 2, 8]));

// filter an array

function filterArray(arr, condition) {
  return arr.filter(condition);
}

console.log(filterArray([3, 5, 7, 2, 8], (num) => num >= 5));

//factorial
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//prime number check
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

//fibonacci
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(generateFibonacci(5));
