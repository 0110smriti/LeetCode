// Distribute Candies


// Solution 1 - Using object/map
var distributeCandies = function(candyType) {
    let types = {}
    let len = candyType.length
    for(let i=0; i<len; i++) {
        types[candyType[i]] = (types[candyType[i]] || 0) + 1
    }
    let keys = Object.keys(types).length;
    return keys >= (len/2) ? len/2 : keys ;
};

// Solution 2 - Using sets
var distributeCandies = function(candyType) {
    let set = new Set()
    let len = candyType.length
    for(let i=0; i<len; i++) {
        set.add(candyType[i])
    }
    let types = set.size;
    return types >= (len/2) ? len/2 : types ;
};