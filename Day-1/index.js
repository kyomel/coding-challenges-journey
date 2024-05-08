// Question: You’re provided with a JavaScript function that is supposed to calculate the sum of all numbers in an array, but it contains several bugs. Your task is to identify and fix these errors to ensure the function runs correctly.
// Logic Errors: The function has logic errors that prevent it from returning the correct sum.
// Syntax Errors: Check for any syntax errors that might be causing problems.
// Optimization: Propose any optimizations to improve the function’s efficiency or readability.
// function calculateSum(arr) { 
//   var total = 0; 
//   for(var i = 0; i <= arr.length; i++) { 
//     total += arr[i]; 
//   } 
//   return total; 
// }

// Solution:
// Variable Scope Improvement: Changed var to let in the loop declaration. This is a best practice to avoid scoping issues, as let limits the variable scope to the loop block, reducing errors and improving code readability.
// Correcting the Loop Condition: Modified the loop condition from i <= arr.length to i < arr.length. This prevents an out-of-bounds error which occurs because arrays are zero-indexed in JavaScript, and accessing arr[arr.length] results in undefined.
// Why These Changes Matter: Debugging involves not only identifying and fixing errors but also optimizing code for better performance and maintainability. These changes ensure that the function not only works correctly but is also written in a way that follows modern JavaScript best practices.
// We hope this solution helps you refine your debugging skills and understand the importance of writing clean, efficient code.

function calculateSum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // refactor for of loop
  // for(let num of arr) {
  //   total += num;
  // }
  return total;
}