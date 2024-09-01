// Defuse the bomb

// Time complexity - O(n*|k|)


var decrypt = function(code, k) {
    let n = code.length; // Get the length of the code array
    let ans = new Array(n); // Initialize the answer array with the same length as code

    if(k === 0) { // If k is 0, all elements in the answer should be 0
        for(let i = 0; i < n; i++) {
            ans[i] = 0;
        }
        return ans; // Return the array filled with 0s
    }

    if(k >= 1) { // If k is positive, sum the next k elements
        for(let i = 0; i < n; i++) {
            let sum = 0;
            for(let j = 1; j <= k; j++) {
                let ind = (i + j) % n; // Calculate the index wrapping around the array
                sum += code[ind];
            }
            ans[i] = sum; // Store the sum in the answer array
        }
        return ans;
    }

    if(k < 1) { // If k is negative, sum the previous |k| elements
        for(let i = 0; i < n; i++) {
            let sum = 0;
            for(let j = 1; j <= Math.abs(k); j++) {
                let ind = i - j; 
                if(i - j < 0) {
                    ind = ind + n; // Adjust the index if it goes negative
                }
                ind = ind % n; // Ensure the index wraps around the array
                sum += code[ind];
            }
            ans[i] = sum; // Store the sum in the answer array
        }
        return ans;
    }
};

