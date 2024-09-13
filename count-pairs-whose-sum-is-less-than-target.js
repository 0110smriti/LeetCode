// Count Pairs Whose Sum is Less Than target

// Time Complexity - O(n^2)


var countPairs = function(nums, target) {
    let count = 0;        // Initialize the counter for pairs
    let n = nums.length;  // Get the length of the nums array
    
    // Iterate over all pairs (i, j) such that i < j
    for(let i = 0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++) {
            // Check if the sum of the current pair is less than the target
            if(nums[i] + nums[j] < target) {
                count++;  // Increment the count if the condition is true
            }
        }
    }
    
    return count;  // Return the total count of valid pairs
};



