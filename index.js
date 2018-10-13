const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) { //start with 1 and not 0 because 0 is already sorted. Loops over every number in the array
    var temp = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > temp; j--) {
      nums[j+1] = nums[j];
    }
    nums[j+1] = temp
  }
return nums
}

var array = [10,5,3,8,2,6,4,7,9,1]

console.log(insertionSort(array));

//Pseudocode
//function insertionSort(nums) 
// Loop through array
// Create temp var for current element
// Create var and set equal to previous element's index
// Loop backwards while index >= 0 and current element > temp var
// Set next element equal to current element
// Set next element equal to temp 