//A. PREDICT THE OUTPUT:
for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4;
}

//i 

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
    // your code here
    return currentSum / arr.length;
}

function sum_even(){
    var sum = 0;
    for(var i = 8; i <=124; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    //your code here
    return sum; 
 }

 console.log(sum_even());


 function largestValue(){
	var array = [13, 15, -18, 29, 3, -4, -9, -10, 3, -7];
	var largest = array[0];
	for(var i = 0; i < array.length; i++){
	    if(array[i]>largest){
	        largest = array[i];
	    }
	}
	//your code here
	return largest; 
}

console.log(largestValue());