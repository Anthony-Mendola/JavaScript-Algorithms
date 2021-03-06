// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

//Pseudocode
/*
Create an empty array to hold chunks called "chunked"
Iterate through each element in the "unchunked" original array
Retrieve the last element in 'chunked'
If last element does not exist, or if its length is equal to chunk size
then push a new chunk into 'chunked' with the current element
else add the current element into the chunk
*/

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length -1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
    }
    return chunked;
  }

