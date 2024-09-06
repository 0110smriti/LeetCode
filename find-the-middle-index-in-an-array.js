// Find the middle index in an array

// Time Complexity - O(n)


var findMiddleIndex = function(nums) {
    // Initialize left_sum to 0, as there's no element on the left initially.
    let left_sum = 0;
    
    // Get the length of the input array 'nums'.
    let n = nums.length;
    
    // Calculate the initial right_sum by summing all elements in the array
    // except the first element (since the first element is considered part of the right side).
    let right_sum = nums.reduce((sum, curr) => curr + sum, 0) - nums[0];
    
    // Check if the first element is the middle index (where left_sum equals right_sum).
    if (left_sum === right_sum) return 0;

    // Iterate through the array starting from index 1.
    for(let i = 1; i < n; i++) {
        // Update the left_sum by adding the previous element.
        left_sum += nums[i - 1];
        
        // Update the right_sum by subtracting the current element.
        right_sum -= nums[i];

        // If left_sum equals right_sum, return the current index as the middle index.
        if(left_sum === right_sum) return i;
    }
    
    // If no such middle index is found, return -1.
    return -1;
};
