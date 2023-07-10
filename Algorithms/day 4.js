// Reversing an array
// Write a function `reverseArray` that takes in an array, and returns the array reversed,
// try it without creating a new array

var arr1 = [11, 22, 33, 44, 55];
// expected // [55, 44, 33, 22, 11];

var arr2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

// 👉write the pseudo code first
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

/* 
1. create two variables temp
2. start with a loop to traverse through the array
3. check for a condition: if index in the loop reaches value half of (arraylength) then terminate the loop. if its not half you keep going
*/

function reverseArrayForLoop(someArray) {

    //start = 0;
    // 
    //temp - first index
    var temp = 0;
    //setting last index end to length of the arraylength-1
    var end = (someArray.length - 1);
    //check for a condition: if index in the loop reaches value half of (arraylength) then terminate the loop.
    for (var i = 0; i < (someArray.length / 2); i++) {
        //setting temp equal to beginning array element
        temp = someArray[i];
        //setting end element to index 1
        someArray[i] = someArray[end - i];

        someArray[end - i] = temp;
    }
    return someArray;
    // your code here
}



// console.log(reverseArrayForLoop(arr1));

function reverseArrayWhileLoop(someArray) {

    var i = 0;
    var temp = 0;
    var end = (someArray.length - 1);
    while (i < someArray.length / 2) {
        temp = someArray[i];
        someArray[i] = someArray[end - i];
        someArray[end - i] = temp;
        i++;
    }

    // while (i <end){
    //     temp = someArray[i];
    //     someArray[i] = someArray[end];
    //     someArray[end] = temp;
    //     i++;
    //     end --;
    // }

    // }
    return someArray;

}

console.log(reverseArrayWhileLoop(arr1));

// console.log(arr1.reverse());



// 🚨 don't forget to invoke/call the function

// use a 'for-loop' then refactor it using a 'while' loop

// we expect to get back...
// [55, 44, 33, 22, 11];
// ["e", "d", "c", "b", "a"];