function firstDuplicate(a) {
  
  let dictionary = {};

  for(let i = 0; i < a.length; i++) {
if(dictionary[a[i]] !== undefined)
     return a[i];
else
   dictionary[a[i]] = i;
  }

  return -1;
}


console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));