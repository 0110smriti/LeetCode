// Partition Equal Subset Sum

// Time Complexity - O(n * sum/2)

var canPartition = function(nums) {
    // Calculate the total sum of the array
    const sum = nums.reduce((acc, curr) => acc + curr);

    // If the total sum is odd, it's impossible to partition it into two equal subsets
    if(sum % 2 !== 0) return false;

    // If the sum is even, check if there's a subset with a sum equal to sum/2
    return subsetSum(nums, sum / 2);
};

const subsetSum = (nums, sum) => {
    let n = nums.length;

    // Create a 2D dp array with dimensions (n+1) x (sum+1)
    let dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(0));

    // Initialize the dp array
    for(let i = 0; i < n + 1; i++) {
        for(let j = 0; j < sum + 1; j++) {
            if(i === 0) {
                dp[i][j] = false; // No subset can sum to a positive number with zero elements
            }
            if(j === 0) {
                dp[i][j] = true;  // A subset sum of 0 is always possible (by taking no elements)
            }
        }
    }

    // Fill the dp array using the subset sum logic
    for(let i = 1; i < n + 1; i++) {
        for(let j = 1; j < sum + 1; j++) {
            if(nums[i - 1] <= j) {
                // Include the current element or exclude it
                dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
            } else {
                // Exclude the current element
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // The answer will be in dp[n][sum], whether it's possible to form a subset with the given sum
    return dp[n][sum];
}
