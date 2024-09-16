// Shortest Distance to a character

// Time Complexity - o(n*m)

var shortestToChar = function(s, c) {
    let n = s.length;      // Length of the input string
    let c_idx = [];        // Array to store the indices of the character 'c'

    // Iterate through the string and store the indices where character 'c' is found
    for(let i = 0; i < n; i++) {
        if(s[i] === c) {
            c_idx.push(i); // Push the index of character 'c' into the array
        }
    }

    let ans = [];         // Array to store the result (shortest distance to 'c')
    let n2 = c_idx.length; // Length of the array storing 'c' indices

    // Iterate through the string to compute the shortest distance for each character
    for(let i = 0; i < n; i++) {
        if(s[i] === c) {
            ans.push(0);  // Distance to 'c' is 0 if the current character is 'c'
        } else {
            let min_dis = n;  // Initialize the minimum distance with a large value
            // Iterate through the stored 'c' indices and find the minimum distance
            for(let j = 0; j < n2; j++) {
                if(Math.abs(i - c_idx[j]) < min_dis) {
                    min_dis = Math.abs(i - c_idx[j]);
                }
            }
            ans.push(min_dis); // Push the minimum distance to the result array
        }
    }
    
    return ans; // Return the array of shortest distances
};
