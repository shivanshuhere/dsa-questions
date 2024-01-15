const nums = [13, 46, 24, 52, 20, 9];
let len = nums.length;

const sort = (nums, n) => {
    if (n == 1) return;
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[i + 1]) {
            let tmp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = tmp;
        }
    }
    n--;
    return sort(nums, n);
};

sort(nums, len);

console.log(nums);
