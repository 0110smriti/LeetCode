// Relative sort array

var relativeSortArray = function(arr1, arr2) {
    let counts = {}
    // store the counts of each item of array 1 in an object
    arr1.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
    })
    // sort the kyes of object
    const sorted_keys = Object.keys(counts).sort((a,b) => a-b)
    let k = 0;
    // for each item in array 2
    // add the item to the result array
    // until the count of that item in the object becomes zero
    arr2.forEach((num) => {
        while(counts[num]) {
            arr1[k] = num
            counts[num]-=1
            k++
        }
    })
    // For all the sorted_keys that have value > 0
    // add the key to the result array until the value becomes zero
    sorted_keys.forEach((key) => {
        while(counts[key]) {
            arr1[k] = parseInt(key)
            counts[key] -= 1
            k++
        }
    })
    return arr1
};