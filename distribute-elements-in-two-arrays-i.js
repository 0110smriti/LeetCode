// Distribute Elements in Two Arrays - I

// Time Complexity - O(n)


var resultArray = function(nums) {
    let n = nums.length;  // Length of the input array
    let arr1 = [nums[0]]; // Initialize arr1 with the first element
    let arr2 = [nums[1]]; // Initialize arr2 with the second element
    let i = 0;            // Pointer for arr1
    let j = 0;            // Pointer for arr2
    let k = 2;            // Pointer for the rest of nums

    // Iterate through the remaining elements of nums
    while(k < n) {
        // Compare the last elements of arr1 and arr2
        if(arr1[i] > arr2[j]) {
            // If the last element of arr1 is greater, push the next number to arr1
            arr1.push(nums[k++]);
            i++; // Move arr1 pointer
        } else {
            // Otherwise, push the next number to arr2
            arr2.push(nums[k++]);
            j++; // Move arr2 pointer
        }
    }

    // Return the concatenated result of arr1 and arr2
    return [...arr1, ...arr2];
};
