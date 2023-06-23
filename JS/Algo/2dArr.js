// Nesting Arrays
// Arrays are capable of having arrays inside of them. Assuming we're given an array like...

var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// complete the following function
function flatten(arr2d) {
    var flat = [];
    //we create a for loop to access the array
    for (let i = 0; i < arr2d.length; i++) {
        //set index for second loop (which accesses the inner array)
        const index = arr2d[i];
        //create a for loop to run through inner array
        for (let j = 0; j < index.length; j++) {
            //push contents of inner array after index
            flat.push(index[j]);
            
        }
        
    }
    return flat;
}
    
var result = flatten([[2, 5, 8],[3, 6, 1],[5, 7, 7],[5, 7,8,7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]