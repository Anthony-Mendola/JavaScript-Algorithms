const quickSort = (nums) => {
  if (nums.length <= 1) return nums; //base case

  const pivot = nums[nums.length - 1] //the last element of the array
  const left = []
  const right = []

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i])
    }
  }

//const sortedLeft = quickSort(left)
return [...quickSort(left), pivot, ...quickSort(right)];
}