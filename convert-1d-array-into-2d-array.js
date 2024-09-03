// Convert 1D array into 2D array

// Time Complexity - O(m*n)

var construct2DArray = function(original, m, n) {
    let len = original.length; // Get the length of the original array

    // Check if the total number of elements matches m * n
    if(m * n !== len) return []; // If not, return an empty array

    // Initialize a 2D array with m rows and n columns, filled with 0
    let ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

    let i = 1; // Initialize row index starting from 1
    let j = 0; // Initialize index for the original array

    // Iterate through each row
    while(i <= m) {
        // Iterate through each column in the current row
        for(let k = 0; k < n; k++) {
            ans[i - 1][k] = original[j]; // Assign the current element from original to the 2D array
            j++; // Move to the next element in original
        }
        i++; // Move to the next row
    }

    return ans; // Return the constructed 2D array
};
