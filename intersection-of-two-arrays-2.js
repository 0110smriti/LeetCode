// Intersection of Two Arrays II


// Solution - O(n)

var intersect = function(nums1, nums2) {
    // Create an object
    let num_count = {};
    const l1 = nums1.length;
    const l2 = nums2.length;
    const ans = [];
    // Traverse through the first array and
    // add or increment the count as value and the item as key for each item
    for(let i=0; i<l1; i++) {
        num_count[nums1[i]] = (num_count[nums1[i]] || 0) + 1;
    }
    // Traverse through the second array and check in object
    // If item is present in object, add it to answer array
    // and decrement the count in object by 1
    for(let i=0; i<l2; i++) {
        if(num_count[nums2[i]]) {
            ans.push(nums2[i])
            num_count[nums2[i]]-=1
        }
    }
    return ans
};