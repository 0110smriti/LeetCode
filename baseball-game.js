// Baseball Game

// Time complexity - O(n)

var calPoints = function(ops) {
    let len = ops.length;  // Store the length of the operations array
    const scores = [];  // Initialize an empty array to store the scores
    let index = -1;  // Initialize an index pointer for the scores array

    // Iterate through the operations array
    for (let i = 0; i < len; i++) {
        switch (ops[i]) {
            case "C":  // "C" operation: Invalidate the last score
                scores.pop();  // Remove the last score from the scores array
                index--;  // Decrement the index pointer
                break;
            case "D":  // "D" operation: Double the last score
                scores.push(scores[index] * 2);  // Add the double of the last score to the scores array
                index++;  // Increment the index pointer
                break;
            case "+":  // "+" operation: Add the last two scores
                scores.push(scores[index] + scores[index - 1]);  // Sum the last two scores and add to the array
                index++;  // Increment the index pointer
                break;
            default:  // If the operation is a number, convert it and add to the scores array
                scores.push(parseInt(ops[i]));
                index++;  // Increment the index pointer
        }
    }

    // Calculate and return the sum of all scores
    return scores.reduce((total, score) => total + score, 0);
};