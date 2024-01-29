const nums = [2, 0, 2, 1, 1, 0];

for (let i = 0; i < nums.length; i++) {
  // first ele
  for (let j = i + 1; j <= nums.length; j++) {
    // second ele
    if (nums[i] > nums[j]) {
      // swap
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }
}

console.log(nums);
