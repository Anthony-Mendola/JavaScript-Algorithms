//Create a function that gets the result below
const result = add(1)(2) // 3



function add(num1) {
  return function(num2) {
      return num1 + num2
  }
}

console.log(result)

//ES6
//const add = num1 => num2 => num1 + num2