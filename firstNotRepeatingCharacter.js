function firstNotRepeatingCharacter(string) {
    
  for (var i = 0; i < string.length; i++) {
  var c = string.charAt(i);
  if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
    return c;
  }
}
return "_";

}

console.log(firstNotRepeatingCharacter("mississippi"))

//Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview. Given a string, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

