// Merge Sorted Array

// Time Complexity - O(m+n)

var merge = function(nums1, m, nums2, n) {
    // Create a copy of the first m elements of nums1
    let i = 0;
    let j = 0;
    let n1 = [];
    for(let i = 0; i < m; i++) {
        n1[i] = nums1[i];
    }

    // Initialize index k for the merged array
    let k = 0;

    // Merge the two arrays by comparing elements
    while(i < m && j < n) {
        if(n1[i] < nums2[j]) {
            nums1[k] = n1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    // Copy any remaining elements of n1 (if any)
    while(i < m) {
        nums1[k] = n1[i];
        i++;
        k++;
    }

    // Copy any remaining elements of nums2 (if any)
    while(j < n) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
};