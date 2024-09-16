// Walking Robot Simulation

// Time Complexity - O(O + C) // O - obstacles, c - commands


var robotSim = function(commands, obstacles) {
    // Define the four directions: North, East, South, West
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let currentDirection = 0; // Start facing North
    let x = 0, y = 0; // Starting position
    let maxDistanceSquared = 0;

    // Convert obstacles to a set of strings for O(1) lookup
    const obstacleSet = new Set(obstacles.map(obstacle => obstacle.toString()));

    // Process each command
    for (let command of commands) {
        if (command === -2) {
            // Turn left: (currentDirection - 1) mod 4
            currentDirection = (currentDirection + 3) % 4;
        } else if (command === -1) {
            // Turn right: (currentDirection + 1) mod 4
            currentDirection = (currentDirection + 1) % 4;
        } else {
            // Move forward 'command' steps
            for (let step = 0; step < command; step++) {
                // Calculate the next step
                const nextX = x + directions[currentDirection][0];
                const nextY = y + directions[currentDirection][1];

                // Check if the next step is an obstacle
                if (obstacleSet.has([nextX, nextY].toString())) {
                    break; // Stop if there's an obstacle
                }

                // Update the robot's position
                x = nextX;
                y = nextY;

                // Calculate the current distance squared from the origin
                maxDistanceSquared = Math.max(maxDistanceSquared, x * x + y * y);
            }
        }
    }

    return maxDistanceSquared;
};