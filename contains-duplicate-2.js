// Contains Duplicate II

// Solution has Time Complexity -  O(n)

var containsNearbyDuplicate = function(nums, k) {
    // Check the length of the array
    let len = nums.length;
    // Create an object
    let indices = {};
    // Loop through the entire array and
    // if the number is not present in the object
    // add the number as key and the index as value
    for(let i=0; i<len; i++) {
        if(!indices.hasOwnProperty(nums[i])) {
            indices[nums[i]] = i;
        }else{
            // if number is already present as key in the object
            // check different between current index and saved index
            // if difference <= k return true
            // else update the value to the current index
            if(i - indices[nums[i]] <= k) {
                return true;
            }else{
                indices[nums[i]] = i;
            }
        }
    }
    // return false if the array is traversed
    // but true is not returned
    return false;
};