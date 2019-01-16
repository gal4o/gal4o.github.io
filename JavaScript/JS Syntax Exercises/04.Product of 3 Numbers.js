function product(nums){
    let negativeCount = 0;
    for (let i =0; i<nums.length;i++)
        if (nums[i]<0)
        negativeCount += 1;
    if (negativeCount%2 != 0)
        console.log('Negative');
    else{
        console.log('Positive');
    }
}