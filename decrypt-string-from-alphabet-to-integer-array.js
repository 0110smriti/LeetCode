// Decrypt String from Alphabet to Integer Mapping

// Time Complexity - O(n)

var freqAlphabets = function(s) {
    let nums = []; // Array to store numbers extracted from the string
    let n = s.length; // Length of the input string
    const alpha = {
        '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i',
        '10': 'j', '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o', '16': 'p', '17': 'q',
        '18': 'r', '19': 's', '20': 't', '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
    };

    // Iterate through the string from the end to the beginning
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '#') {
            // If '#' is found, grab the two preceding characters as a two-digit number
            let new_s = s[i - 2] + s[i - 1];
            i -= 2; // Move the pointer two positions back to account for the two-digit number
            nums.unshift(new_s); // Add the number to the beginning of the nums array
        } else {
            // If it's a single-digit number, add it directly
            nums.unshift(s[i]);
        }
    }

    let ans = ""; // To store the final decoded string
    // Convert each number in nums to its corresponding alphabet using the alpha map
    for (let i = 0; i < nums.length; i++) {
        ans += alpha[nums[i]];
    }
    
    return ans; // Return the decoded string
};
