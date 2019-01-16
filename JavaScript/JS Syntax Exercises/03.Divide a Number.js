function multiplyOrDivide(nums) {
    let result = 0;
    if (nums[1] >= nums[0]) {
            result = nums[0] * nums[1];
            console.log(result);
    } else {
            result = nums[0] / nums[1];
            console.log(result);
    }
}