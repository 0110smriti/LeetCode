// Median of Two Sorted Arrays 

// Solution 1 - Using extra space
// Space - O(n), Time - O(n)

var findMedianSortedArrays = function(nums1, nums2) {
    // First, traverse through both the arrays
    // and push elements into third sorted array
    const sorted_array = []
    let l1 = nums1.length;
    let l2 = nums2.length;
    let i = 0;
    let j = 0;
    while(i<l1 && j<l2){
        if(nums1[i] < nums2[j]){
            sorted_array.push(nums1[i++])
        }else{
            sorted_array.push(nums2[j++])
        }
    }
    while(i<l1){
        sorted_array.push(nums1[i++])
    }
    while(j<l2){
        sorted_array.push(nums2[j++])
    }

    // Find the middle element
    const middle = Math.floor((l1+l2)/2)

    // If sum of length of input arrays is even
    // Calculate median using two middle elements, mid and mid-1 from the sorted array
    // else, return the middle element from the sorted array
    if((l1+l2)%2 === 0) {
        return (sorted_array[middle] + sorted_array[middle-1])/2;
    }
    return sorted_array[middle];
};