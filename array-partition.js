// Array Partition

var arrayPairSum = function(nums) {
    // Sort the numbers
    nums.sort((a,b) => a-b)
    const len = nums.length;
    let sum = 0;
    // Sum of numbers on even indices
    // if we sort the array (0,1)
    // item with index 0 will be smaller
    // same for (2,3),(4,5)...
    for(let i=0; i<len; i+=2) {
        sum += nums[i]
    }
    return sum;
};