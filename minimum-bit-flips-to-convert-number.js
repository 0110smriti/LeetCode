// Minimum Bit Flips to Convert Number

// Time Complexity - O(1)

var minBitFlips = function(start, goal) {
    let xorResult = start ^ goal; // XOR the two numbers to get a bit representation of differing bits
    let count = 0; // To count the number of bit flips needed
    
    // Count the number of 1's in the XOR result
    while (xorResult > 0) {
        count += xorResult & 1;  // If the least significant bit is 1, it means a flip is needed
        xorResult >>= 1;         // Right shift to check the next bit
    }
    
    return count; // Return the total number of flips
};
