// Find all numbers disappeared in an array

// Time Complexity - O(n)

var findDisappearedNumbers = function(nums) {
    let len = nums.length;  // Get the length of the input array
    let count = {};  // Create an object to count the occurrences of each number
    let max = nums[0];  // Initialize max with the first element in the array
    let min = nums[0];  // Initialize min with the first element in the array
    
    // First loop: Populate the count object and find min and max values
    for (let i = 0; i < len; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;  // Count the occurrences of each number
        if (nums[i] > max) max = nums[i];  // Update max if the current number is greater than max
        if (nums[i] < min) min = nums[i];  // Update min if the current number is smaller than min
    }
    
    const ans = [];  // Array to store the missing numbers
    
    // Second loop: Find the numbers that are missing in the range from 1 to len
    for (let i = 1; i <= len; i++) {
        if (!count[i]) {  // If a number is not in the count object, it's missing
            ans.push(i);
        }
    }
    
    return ans;  // Return the array of missing numbers
};