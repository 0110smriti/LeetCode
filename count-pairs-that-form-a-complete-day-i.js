// Count pairs that form a complete day

// Time Complexity = O(n^2)

var countCompleteDayPairs = function(hours) {
    let count = 0;
    const n = hours.length;
    
    // Iterate through all pairs of hours
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            // Check if the sum of the pair is divisible by 24
            if((hours[i] + hours[j]) % 24 === 0) {
                count++;  // If true, increment the count
            }
        }
    }
    
    return count;  // Return the total number of valid pairs
};
