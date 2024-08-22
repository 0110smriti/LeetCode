// Get Maximum Generated

// Time Complexity - O(n)

var getMaximumGenerated = function(n) {
    let max = 0;  // Variable to keep track of the maximum value in the array
    if (n === 0) return 0;  // If n is 0, return 0 immediately since the array will only contain [0]

    max = 1;  // Set the initial maximum to 1 since the first generated value is always 1
    const nums = [0, 1];  // Initialize the array with the first two elements: 0 and 1

    // Start generating the array from index 2 to n
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            // For even indices, nums[i] is equal to nums[i/2]
            const num = nums[i / 2];
            nums[i] = num;
            if (num > max) {
                max = num;  // Update max if the current number is greater than max
            } 
        } else {
            // For odd indices, nums[i] is equal to nums[floor(i/2)] + nums[floor(i/2) + 1]
            const num = nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1];
            nums[i] = num;
            if (num > max) {
                max = num;  // Update max if the current number is greater than max
            }
        }
    }
    
    return max;  // Return the maximum value found in the generated array
};