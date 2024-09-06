// Maximum Average Subarray - I

// Time complexity - O(n)

var findMaxAverage = function(nums, k) {
    let len = nums.length;
    let sum_k = 0;
    let start = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        sum_k += nums[i];
    }

    // Initialize the maximum average with the average of the first 'k' elements
    let max_avg = sum_k / k;

    // Use a sliding window to calculate the sum of each subsequent subarray of length 'k'
    for (let i = k; i < len; i++) {
        sum_k += nums[i];    // Add the next element to the current sum
        sum_k -= nums[start]; // Remove the first element of the previous subarray from the current sum
        start++;              // Move the starting point of the window forward

        // Calculate the new average and update max_avg if it's larger
        max_avg = Math.max(max_avg, sum_k / k);
    }

    return max_avg;
};