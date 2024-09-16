// Points that Intersect with Cars

// Time Complexity - O(n*m)

var numberOfPoints = function(nums) {
    let spots = new Set();  // Create a set to store unique points

    let n = nums.length;  // Get the length of the input array

    // Iterate through each pair of start and end points in the nums array
    for(let i = 0; i < n; i++) {
        // For each pair, add all points from start (nums[i][0]) to end (nums[i][1]) into the set
        for(let j = nums[i][0]; j <= nums[i][1]; j++) {
            spots.add(j);  // Add each point to the set
        }
    }

    return spots.size;  // The size of the set represents the number of unique points
};


