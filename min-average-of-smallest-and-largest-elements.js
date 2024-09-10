// Minimum Average of Smallest and Largest Elements

// Time Complexity -  O((n/2) * n)

var minimumAverage = function(nums) {
    let len = nums.length; // Get the length of the nums array
    let times = len / 2; // Calculate the number of pairs to consider
    let average = Number.POSITIVE_INFINITY; // Initialize the minimum average as positive infinity
    
    for (let i = 0; i < times; i++) { // Loop over half the length of the array
      // Find the minimum value and its index in the current nums array
      const min = nums.reduce((prev, curr, ind) => {
        if (curr < prev.val || Object.keys(prev).length === 0) {
          return { val: curr, ind }; // Update minimum value and index
        }
        return prev; // Keep the previous minimum value if the current one is not smaller
      }, {});
      
      // Remove the found minimum element from nums
      nums.splice(min.ind, 1);
      
      // Find the maximum value and its index in the remaining nums array
      const max = nums.reduce((prev, curr, ind) => {
        if (curr > prev.val || Object.keys(prev).length === 0) {
          return { val: curr, ind }; // Update maximum value and index
        }
        return prev; // Keep the previous maximum value if the current one is not greater
      }, {});
      
      // Remove the found maximum element from nums
      nums.splice(max.ind, 1);
      
      // Calculate the average of the current min and max pair
      let avg = (min.val + max.val) / 2;
      
      // Update the minimum average if the current average is smaller
      if (avg < average) {
        average = avg;
      }
    }
    
    // Return the smallest average found
    return average;
  };
  

