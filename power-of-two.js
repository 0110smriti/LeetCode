// Power of two


// Time complexity - O(logn)

var isPowerOfTwo = function(n) {
    // If n is less than 1, it cannot be a power of two
    if (n < 1) {
        return false;
    }
    
    // If n is 1, it is a power of two (2^0 = 1)
    if (n === 1) {
        return true;
    }
    
    // Recursively divide n by 2 and check if the result is a power of two
    return isPowerOfTwo(n / 2);  
};