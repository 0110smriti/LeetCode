// Two Sum

// Solution 1 - O(n^2)
var twoSum = function(nums, target) {
    let len = nums.length; // Get the length of the array
    for(let i=0; i<len-1; i++) {
        let num2 = target - nums[i]; // Check the remaining number required
        for(let j=i+1; j<len;j ++) { // Loop again to check if the number is present ahead in the array
            if(nums[j] == num2) { // if the number is present, return the indices
                return [i,j];
            }
        }
    }
};



// Solution 2 - O(n)

var twoSum = function(nums, target) {
    let obj = {}; //Object to store the nums as key and their index as value

    let len = nums.length; // Get the length of entire array
    
    for(let idx=0; idx<len; idx++) { // traverse through each item
        // Subtract current item from target to get the remaining num required
        const remaining = target - nums[idx];

        // If the obj has the remaining num present, return the current index and the 
        // index of the remaining num present in the obj as value
        if(obj[remaining] != null && obj[remaining] != undefined) {
            return [idx, obj[remaining]]
        }

        // else add the current number as key and it's index as value to obj
        obj[nums[idx]] = idx;
    }
};