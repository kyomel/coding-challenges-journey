// Question: Find the Missing Number in an Array - Web Development with Node.js
// Understand the Sequence: The array contains unique integers from 1 to n+1, but it's unsorted and one number is missing.
// Efficiency Matters: Your solution should operate in O(n) time and require no extra space.
// Approach: Consider mathematical properties or bitwise operations to solve the problem efficiently.
// Example Array: [3, 7, 1, 2, 8, 4, 5] (Figure out the missing number!)

// Solution:
// Efficient Solution Using the Sum Formula: We implemented a function that uses the sum formula to efficiently find the missing number from the array. This approach ensures O(n) time complexity and O(1) space complexity.
function findMissingNumber(array) {
  const n = array.length + 1;
  const expectedSum = n*(n+1)/2;
  const actualSum = array.reduce((acc, cur) => acc + cur, 0);

  return expectedSum - actualSum;
}

// Efficient Solution Using Bitwise XOR: Alternatively, we used the XOR operation to find the missing number, which is also efficient in both time and space.
function findMissingNumberXOR(array) {
  let xor = 0;
  let i;
  for(i = 1; i <= array.length+1; i++) {
    xor ^= i;
    if(i <= array.length) xor ^= array[i-1];
  }

  return xor;
}

// Building a Web Application: We developed a simple web application using Node.js and Express to allow users to input their array and retrieve the missing number.
// 1. Web Interface: We created an HTML form for users to enter their array, and a script to handle the form submission and display the result dynamically. Check file html
// 2. Server-Side Logic with Node.js and Express: We set up an Express server to handle POST requests, calculate the missing number, and respond with the result. Check file server.js