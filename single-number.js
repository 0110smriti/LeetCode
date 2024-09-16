// Single Number

// Time Complexity - O(n)

// XOR of two same numbers is always zero, so after xoring entire array only the number without duplicate will be left
var singleNumber = function(nums) {
    let xor = 0;  // Initialize a variable to hold the result of XOR operations
    let len = nums.length;  // Get the length of the input array

    // Iterate through the array and perform XOR operation on each element
    for (let i = 0; i < len; i++) {
        xor ^= nums[i];  // XOR the current element with the accumulated result
    }

    return xor;  // The result will be the single number that doesn't have a pair
};