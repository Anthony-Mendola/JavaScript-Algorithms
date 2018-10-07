//fizzBuzz
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 & 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//If the input is not a number => 'not a number'
const output = fizzBuzz(true);
console.log(output);


function fizzBuzz(input) {
if (typeof input !== "number") return NaN;
if ((input % 5 === 0) && (input % 3 === 0)) return "FizzBuzz";
if (input % 3 === 0) return "Fizz";
if (input % 5 === 0) return "Buzz";
return input;
}