// Ant on the Boundary

// Time Complexity - O(n)

var returnToBoundaryCount = function(nums) {
    let n = nums.length;  // Get the length of the nums array
    let count = 0;        // Initialize the counter for the number of times we return to boundary (sum = 0)
    let ant = 0;          // Variable to track the cumulative sum
    
    // Iterate through the array
    for(let i = 0; i < n; i++) {
        ant += nums[i];   // Add the current element to the cumulative sum (ant)
        
        // Check if the cumulative sum is zero
        if(ant === 0) count++;  // Increment count if cumulative sum (ant) equals zero
    }
    
    return count;  // Return the total count of times we return to the boundary
};
