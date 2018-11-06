// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];
  
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

return words.join(' ');
}

//pseudo code
/*
make an empty array "words"
split the input string by spaces to get an array
for each word in the array
  uppercase the first letter of the word
  join the first letter with the rest of the string
  Push result into the 'words' array
Join 'words' into a string and return it
*/