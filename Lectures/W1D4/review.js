
//write a function that will push in an array all even numbers starting from 1-10;


function createEvenArray(){

    var evenArray = [];
    for(var i = 1; i <=10; i++ ){
        if(i % 2 == 0){
            evenArray.push(i);
        }
    }
    return evenArray;

}

// createEvenArray();
var printArray = createEvenArray();
console.log(printArray);

//A. PREDICT THE OUTPUT:
for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4;
}

//B. PREDICT THE OUTPUT::
var i = 11;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}


//C. Complete the function in the code below to return the average of all of the values of an array.
// Given: [3, 6, 5, 9, 2]
// Return: 5

function findAverage(arr) {
    var currentSum = 0;
    for(var i = 0; i < arr.length; i++){
        currentSum += arr[i];
    }
    return (` This returns: ${currentSum / arr.length}`);
}
var arr = [3, 6, 5, 9, 2];
var avg = findAverage(arr);
console.log(`This returns ${findAverage(arr)} blah blah blah`);
console.log("This returns %s blah blah blah", avg);
console.log("This returns", avg, "blah blah blah");

/*

%s for a String

%d or %i for Number

%f for Floating points

%o for an Object

%j for an JSON

*/