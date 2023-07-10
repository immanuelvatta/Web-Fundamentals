/* 
    Given an array and an item to search for,
    return the index where the item is found,

    return -1 to represent not found
*/

// R.I.O.T.

const arrA1 = ['a', 'b', 'c'];
const searchItemA1 = 'c';
const expectedA1 = 2;

const arrA2 = ['a', 'b', 'c'];
const searchItemA2 = 5;
const expectedA2 = -1;

const arrA3 = ['c', 'a', 'b', 'c'];
const searchItemA3 = 'c';
const expectedA3 = 0;

const arrA4 = [];
const searchItemA4 = 5;
const expectedA4 = -1;

//* choose your ALGO ROLES
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

/*
👉 spend 10 mins writing the pseudocode only!
1. we are going to traverse through the items array
    2. if we find the item where we are searching is the same as the item we're searching for:
        3. we will return the index of the element in that array
4. if the item we  are searching for is not found,
    5. we will return -1.


*/

function indexOf(items, searchItem) {
    for(var i = 0; i < items.length; i++){
        if(items[i] == searchItem){
            return i;
        }
    }
    return -1;
}

// Tests
const resultA1 = indexOf(arrA1, searchItemA1);
console.log(resultA1, 'should be', expectedA1);

const resultA2 = indexOf(arrA2, searchItemA2);
console.log(resultA2, 'should be', expectedA2);

const resultA3 = indexOf(arrA3, searchItemA3);
console.log(resultA3, 'should be', expectedA3);

const resultA4 = indexOf(arrA4, searchItemA4);
console.log(resultA4, 'should be', expectedA4);



/******    bonus    ********/

/* 
  Given an array and an number which represents the position starting from the back,
  return the nth-to-last element.
  
  JS has the .at() method for this purpose, but solve this algo w/o it.
*/


// Last element:
const arrB1 = ['a', 'b', 'c', 'd'];
const idxB1 = 1;
const expectedB1 = 'd';

// Second to last element:
const arrB2 = ['a', 'b', 'c', 'd'];
const idxB2 = 2;
const expectedB2 = 'c';

const arrB3 = ['a', 'b', 'c', 'd'];
const idxB3 = 0;
const expectedB3 = null;

const arrB4 = ['a', 'b', 'c', 'd'];
const idxB4 = -1;
const expectedB4 = null;

const arrB5 = [];
const idxB5 = 2;
const expectedB5 = null;

// if(idx < array.length)
//     return arr[array.length - idx]

/*
👉 spend 5-10 mins writing the pseudocode only!
1. iterate through the array
    2. idx is less than array length we will continue:
        3. we will return the index 



*/
function nthLast(items, nthToLast) {
    // your code here
}

// Tests
const resultB1 = nthLast(arrB1, idxB1);
console.log(resultB1, 'should be', expectedB1);

const resultB2 = nthLast(arrB2, idxB2);
console.log(resultB2, 'should be', expectedB2);

const resultB3 = nthLast(arrB3, idxB3);
console.log(resultB3, 'should be', expectedB3);

const resultB4 = nthLast(arrB4, idxB4);
console.log(resultB4, 'should be', expectedB4);

const resultB5 = nthLast(arrB5, idxB5);
console.log(resultB5, 'should be', expectedB5);


