// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let myStr = "";
  if (str.match(/^([aeoui])/i) !== null) {
  	myStr = str + 'way';
  }
  else {
  	myStr = str.replace(/([^aeoui]*)(.*)/i, '$2$1');
  	myStr += 'ay';
  }

  return myStr;
}

translatePigLatin("consonant");