// First Bad Version

// Time Complexity - O(n)

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;  // Initialize the starting version index
        let end = n;    // Initialize the ending version index

        // Binary search loop to find the first bad version
        while (start < end) {
            const mid = Math.floor((start + end) / 2);  // Calculate the middle version index

            // Check if mid is the first bad version
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
            
            // Check if mid + 1 is the first bad version
            if (!isBadVersion(mid) && isBadVersion(mid + 1)) return mid + 1;

            // If mid and mid + 1 are both good versions, search in the right half
            if (!isBadVersion(mid) && !isBadVersion(mid + 1)) {
                start = mid;
            } else {
                // Otherwise, search in the left half
                end = mid;
            }
        }
    };
};