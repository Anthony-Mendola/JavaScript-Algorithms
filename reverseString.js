
//Solution 1
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//Solution 2
/*
function reverse(str) {
  let reversed = "";

  //ES6 for loop syntax
  for (let character of str) {
    //for a temporary variable character that is redeclared everytime through the loop, of str which is the iterable we want to iterate through
    reversed = character + reversed;
  }
  return reversed;
}
*/
//Solution 3
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => { 
//     return character + reversed;
//   }, "");
// }

//Solution 3 as ES6
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

//reduce method is used to take all the different values in an array and condense them down to one singular string value. Reduce takes two separate arguments, an arrow function and the 2nd is a starting initial value which is an empty string. When reduce runs, it takes the starting argument, pass it into the arrow function as the first argument and whatever gets returned from that inner function will be used as the starting argument for every successive run of the function. The function runs 1 time for every element in the array. The first argument that is passed into reduce will be received as an argument named reversed. The 2nd argument is the character we are currently operating and will be received as an argument called character. 