// Maximum Odd Binary Number

// Time Complexity - O(n)

var maximumOddBinaryNumber = function(s) {
    let len = s.length; // Length of the input binary string
    let count_1 = 0;    // Counter for the number of '1's
    let count_0 = 0;    // Counter for the number of '0's

    // Count the number of '1's and '0's in the input string
    for (let i = 0; i < len; i++) {
        if (s[i] === '1') {
            count_1++; // Increment the '1' counter
        } else {
            count_0++; // Increment the '0' counter
        }
    }

    let new_s = ""; // Initialize the new string that will represent the maximum odd binary number

    // Add (count_1 - 1) number of '1's at the start of the new string
    for (let i = 1; i < count_1; i++) {
        new_s += "1";
    }

    // Add count_0 number of '0's after the '1's
    for (let i = 1; i <= count_0; i++) {
        new_s += "0";
    }

    // Add a final '1' to ensure the number is odd
    new_s += "1";

    return new_s; // Return the new binary string
};
