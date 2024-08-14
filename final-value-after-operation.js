// Final value of variable after performing operations

// Use reduce
// element at index 1 will either be '+' or '-'
// check element at index 1 to update the variable

var finalValueAfterOperations = function(operations) {
    return operations.reduce((prev, curr, i) => {
        if(curr[1]==='+') {
            return prev+1;
        }
        return prev-1;
    }, 0)
};