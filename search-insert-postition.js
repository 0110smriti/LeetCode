// Search Insert Position

// Time Complexity - O(logn)

var searchInsert = function(nums, target) {
    let start = 0;  // Initialize the starting index of the search range
    let end = nums.length - 1;  // Initialize the ending index of the search range

    // Binary search loop
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);  // Calculate the middle index of the current search range

        if (target === nums[mid]) {
            return mid;  // If the target is found at mid, return the index
        } else if (target > nums[mid]) {
            start = mid + 1;  // If the target is greater than the mid value, narrow the search to the right half
        } else {
            end = mid - 1;  // If the target is less than the mid value, narrow the search to the left half
        }
    }

    return start;  // If the target is not found, return the index where it would be inserted
};

