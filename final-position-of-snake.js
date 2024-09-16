// Final Position of Snake

// Time Complexity - O(n) // number of commands

var finalPositionOfSnake = function(n, commands) {
    // Define how each command affects the snake's position
    const cmd = {
        "RIGHT": {x: 0, y: 1},  // Move right: no change in x, increment y by 1
        "LEFT": {x: 0, y: -1},  // Move left: no change in x, decrement y by 1
        "UP": {x: -1, y: 0},    // Move up: decrement x by 1, no change in y
        "DOWN": {x: 1, y: 0}    // Move down: increment x by 1, no change in y
    };

    let start_x = 0;  // Initial x position
    let start_y = 0;  // Initial y position
    let len = commands.length;

    // Iterate through the commands and update the position
    for (let i = 0; i < len; i++) {
        start_x += cmd[commands[i]].x;  // Update x based on command
        start_y += cmd[commands[i]].y;  // Update y based on command
    }

    // Convert the final x, y coordinates into a single integer position on the grid
    const ans = start_x * n + start_y;  // Assume row-major order
    return ans;  // Return the final position as a single integer
};
