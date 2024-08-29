// Is Power of Three

// Time Complexity - O(log3n)

var isPowerOfThree = function(n) {
    // Continuously divide the number by 3 as long as it's greater than 1
    while (n > 1) {
        // If n is not divisible by 3, return false
        if (n % 3 !== 0) {
            return false;
        }
        // Divide n by 3
        n = n / 3;
    }
    // If n is reduced to 1, it's a power of 3; otherwise, it's not
    return n === 1;
};