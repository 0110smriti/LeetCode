// Binary Search

// Time Complexity - O(logn)

var search = function(nums, target) {
    let left = 0;  // Initialize the left pointer at the start of the array
    let right = nums.length - 1;  // Initialize the right pointer at the end of the array

    // Binary search loop
    while (left <= right) {  // The condition is left <= right to include the possibility of left and right being equal
        const mid = Math.floor((left + right) / 2);  // Calculate the middle index
        
        if (nums[mid] === target) return mid;  // If target is found at mid, return the index

        if (nums[mid] > target) {
            right = mid - 1;  // Narrow the search to the left half if the target is smaller than mid
        } else {
            left = mid + 1;  // Narrow the search to the right half if the target is larger than mid
        }
    }

    // If the loop ends and the target hasn't been found, return -1
    return -1;
};