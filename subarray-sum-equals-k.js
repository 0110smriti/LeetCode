// Subarray sum equals k

// Time Complexity - O(n)

var subarraySum = function(nums, k) {
    const cache = new Map();
    // Initialize the map with a sum of 0 occurring once
    cache.set(0, 1);
    
    let count = 0;  // To count the number of subarrays whose sum equals k
    let sum = 0;    // To store the cumulative sum of elements

    // Traverse through the array
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];  // Add the current element to the cumulative sum
        
        // Calculate the difference between the current sum and k
        let d = sum - k;
        
        // If this difference has been seen before, it means there's a subarray that sums to k
        if (cache.has(d)) {
            count += cache.get(d);  // Increment the count by the number of times the difference has occurred
        }
        
        // Update the map with the current cumulative sum
        cache.set(sum, (cache.get(sum) ?? 0) + 1);
    }
    
    // Return the total count of subarrays that sum to k
    return count;
};
