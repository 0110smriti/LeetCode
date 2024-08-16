// Move Zeroes

// Time Complexity - O(n)

var moveZeroes = function(nums) {
    let len = nums.length;  // Get the length of the input array

    // If the array has only one element, no need to do anything
    if (len === 1) {
        return nums;
    }

    let i = 0;  // Initialize pointer 'i' to track the position of the first zero
    let j = 1;  // Initialize pointer 'j' to traverse the array

    // Traverse the array using the 'j' pointer
    while (j < len) {
        // If both pointers are pointing to non-zero elements, move 'i' forward
        if (nums[i] !== 0 && nums[j] !== 0) {
            i++;
        }
        
        // If 'i' is pointing to a zero and 'j' is pointing to a non-zero element, swap them
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;  // Move 'i' forward after the swap
        }
        
        // Move 'j' forward to continue traversing the array
        j++;
    }
};