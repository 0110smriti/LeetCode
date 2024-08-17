// Nth Tribonacci Number

// Time Complexity - O(n)

var tribonacci = function(n) {
    // Initialize an array with the first few known Tribonacci numbers
    const tribonacci = [0, 1, 1, 2, 4, 7, 13, 24];
    
    // If the desired Tribonacci number is already in the array, return it
    if (tribonacci[n] !== undefined) {
        return tribonacci[n];
    }
    
    // Calculate the Tribonacci numbers for indices greater than 7
    for (let i = 8; i <= n; i++) {
        tribonacci[i] = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
    }
    
    // Return the Tribonacci number at index n
    return tribonacci[n];
};