// Add Digits

// Time Complexity - O(1)

// If number is 0, then it's 0
// If num is divisible by 8, then it's 9
// else it's num%9
var addDigits = function(num) {
    return num === 0 ? 0 : num%9 || 9;
};