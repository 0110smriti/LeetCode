// Container with most water

// Solution - 1 O(n^2) - Time limit exceeded
var maxArea = function(height) {
    let max_area = 0;
    let len = height.length;
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            const l = Math.min(height[j], height[i]) // length will be the minimum height
            const b = j-i; // breadth will be the different in the indices
            const area = l * b; // Get the area
            max_area = Math.max(area, max_area) // The maximum of current area and max_area will be the new maximum area
        }
    }
    return max_area
};

// Solution 2 - (O(n))

var maxArea = function(height) {
    // Initialize left, right and max area
    let max_area = 0;
    let left = 0;
    let right = height.length - 1;
    // Run the loop till left is less than right
    while(left < right) {
        // length will be the minimum of left and right
        const length = Math.min(height[left], height[right]);

        // breadth will be the different between right and left
        const breadth = right - left;

        // Calculate the area and update max_area
        const area = length * breadth;
        max_area = Math.max(max_area, area);

        // If height of left side is less tan right side, increase left by 1
        // else, decrease right by 1
        if(height[left] < height[right]) {
            left++;
        }else{
            right--;
        }
    }
    return max_area;
}