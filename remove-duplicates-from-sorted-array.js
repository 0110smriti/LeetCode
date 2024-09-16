// Remove duplicates from sorted array

// Solution - O(n) time complexity - in place

// We need to return the index + 1  till where the array has unique elements

var removeDuplicates = function(nums) {
    // Take two pointer variables and assign both to the starting of array
    let k = 0;
    let j = 0;
    let len = nums.length;

    // Run a loop till one pointer reaches the length of the array
    while(j < len) {
        // if numbers at both pointers are not same
        // increase k and assign the value of nums[j] to it 
        if(nums[j] !== nums[k]) {
            nums[++k] = nums[j]
        }
        // increase j pointer after every iteration
        j++
    }
    // return k + 1
    return k + 1
};