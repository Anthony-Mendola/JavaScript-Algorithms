// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//pseudocode
/*
from 0 to n (iterate through rows)
  create an empty string, "stair"
  from 0 to n (iterate through columns)
    if the current column is equal to or less than the current row
    add a '#' to "stair"
  else
    add a space to 'stair'
  console log 'stair'
*/

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
