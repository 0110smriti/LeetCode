// Two Sum II

// Time Complexity - O(n)

var twoSum = function(numbers, target) {
    const indices = {};  // Initialize an object to store the indices of the numbers
    let len = numbers.length;  // Get the length of the input array

    for (let i = 0; i < len; i++) {
        const required_number = target - numbers[i];  // Calculate the number needed to reach the target sum
        
        // If the required number is found in the indices object, return the pair of indices
        if (indices[required_number] !== undefined) {
            return [indices[required_number], i + 1];  // Return 1-based indices
        } else {
            // Store the index of the current number in the indices object
            indices[numbers[i]] = i + 1;  // Store 1-based index
        }
    }
};