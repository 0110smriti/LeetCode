// Find Pivot Index

// Time Complexity - O(n)

// Sliding window

var pivotIndex = function(nums) {
    // calculate total sum
    // left sum is 0
    // right sum is total sum - number on first index
    const total_sum = nums.reduce((prev, n) => prev+n, 0)
    let left = 0;
    let right = total_sum - nums[0];
    const len = nums.length;
    // if left and right sum is equal return 0th index
    if(left === right) return 0;
    // run a loop from i= 1
    // left sum will be left+=array[i-1]
    // right sum will be right-=array[i]
    // if both are equal, return the index
    for(let i=1; i<len; i++) {
        left += nums[i-1]
        right -= nums[i]
        if(left === right) {
            return i;
        }
    }
    // if nothing is returned
    // return -1
    return -1;
};