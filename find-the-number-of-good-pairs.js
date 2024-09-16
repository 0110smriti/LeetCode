// Find the Number of Good Pairs

// Time Complexity - O(n*m)

var numberOfPairs = function(nums1, nums2, k) {
    let n = nums1.length;
    let m = nums2.length;
    let count = 0;
    
    // Loop through every element in nums1
    for(let i = 0; i < n; i++) {
        // Loop through every element in nums2
        for(let j = 0; j < m; j++) {
            // Check if nums1[i] is divisible by nums2[j] * k
            if(nums1[i] % (nums2[j] * k) === 0) {
                count++;
            }
        }
    }
    
    return count;
};
