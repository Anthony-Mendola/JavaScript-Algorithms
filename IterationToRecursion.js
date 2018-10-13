//Recursion factorial example

// 6 possible spics (6!) == (n!)
// 6 * 5 * 4 * 3 * 2 * 1 = 720 possible mixtures

/*
Steps:

1) Declare a function called factorial that takes in an argument of an integer that is positive
2) Rule: if 0 then return 1
3) Have a starting result of 1
4) Loop over the numbers from highest to lowest.
5) For each loop we multiply the result by the number in the loop
6) Return the current value of the result for our function

*/
//Iterative Loop Solution
// const factorial = (n) => {
//   let result = 1; 
//   if (n === 0) {
//     return result;
//   }

//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//  return result;
// }

//Recursive solution

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  // recursion code
  /*
  steps
  1. 5 * 4! // 5 * 24 = 120
  2. 4 * 3! // 4 * 6 = 24
  3. 3 * 2! // 3 * 2 = 6
  4. 2 * 1! // 2 * 1 = 2
  5. 1 * 0! // 1 * 1 = 1
  */
/*
steps
1. 1! = 1 * 0! = 1
2. 2! = 2 * 1! = 2
3. 3! = 3 * 2! = 6
4. 4! = 4 * 3! = 24
5. 5! = 5 * 4! = 120
*/
return (n * factorial(n - 1));
}



console.log("The value of 6! is %d", 720);
console.log("The value using my factorial function of 6! is %d", factorial((6)));
console.log("The value of 5! is %d", 120);
console.log("The value using my factorial function of 5! is %d", factorial((5)));
