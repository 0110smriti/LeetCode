// Find the Student that will replace the Chalk

// Time Complexity - O(n)


var chalkReplacer = function(chalk, k) {
    // Calculate the total chalk used in one complete round
    const chalks_in_one_round = chalk.reduce((acc, curr) => acc + curr, 0);
    
    // Find out how much chalk remains after `k` complete rounds
    let incomplete_round_chalks = k % chalks_in_one_round;
    
    // Iterate through each student to determine who cannot finish their chalk
    for(let i = 0; i < chalk.length; i++) {
        if(incomplete_round_chalks >= chalk[i]) {
            // Subtract the chalk used by the current student
            incomplete_round_chalks = incomplete_round_chalks - chalk[i];
        } else {
            // If the remaining chalk is less than the chalk needed by the current student, return their index
            return i;
        }
    }
    
    // If all students can complete their turn, the first student will be the one who fails next
    return 0;
};
