// Question: Solve the Fibonacci Sequence(Calculate Fibonacci Numbers Efficiently)
// Solution:
// The Fibonacci sequence is a fascinating example of a simple mathematical rule leading to a complex pattern of growth. Let’s explore the solutions using various approaches.
// 1. Recursive Approach: We started with a basic recursive function, which quickly demonstrated inefficiency due to excessive function calls, leading to a dramatic increase in computation time for larger values of n.
// Why Inefficient? This method experiences exponential growth in time complexity, making it impractical for large n due to repeated calculations of the same Fibonacci numbers.
// 2. Optimizing with Memoization: To enhance the recursive approach, we implemented memoization to store previously calculated Fibonacci numbers, reducing the time complexity to linear.
// 3. Iterative Approach: The iterative method avoids the deep call stack of recursion and computes each Fibonacci number sequentially, proving to be the most space and time efficient for large n.
// 4. Binet’s Formula: For an academic curiosity, we explored Binet's formula that uses the golden ratio. While not practical for very large numbers due to floating-point precision errors, it's a fascinating mathematical approach.

// Question: Stretch Task: Advanced Data Analysis
// Solution: SQL Editor to analyze the computation times and growth patterns of the Fibonacci numbers across different methods. This provided insights into how algorithm choices impact performance.
// SQL Queries Used: To analyze the data, we performed queries to compare the average computation times and identify trends in the calculation methods.