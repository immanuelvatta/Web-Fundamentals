// Comments Ctrl + / for single line comments



/*
this is a multi line comment
*/

// var x = "bob"; (Ctrl + K + C)


// arrays

//index                 0       1       2
var animalArray = ["giraffe", "lion", "zebra"];
console.log(animalArray);

var anotherAnimal = "eagle";

animalArray.push(anotherAnimal);
//this will show the array with all the animals
console.log(animalArray);

//show me the First animal

console.log(animalArray[0]); // giraffe

//show me the last element
console.log(animalArray[3]);
//if you don't know the array length
console.log("animal length =", animalArray.length);
//array.length-1 gives me the last element
console.log("animal length -1 =", animalArray.length-1);

//getting the last element in the index
console.log(animalArray[animalArray.length-1]);

//to remove the last element from array and returns that element. 
animalArray.pop();
console.log(animalArray);

//change the first element to "frog"
animalArray[0] = "frog";
console.log(animalArray);

animalArray[0] = [2,4,6]
console.log(animalArray);

// to access 4 from animalArray
console.log(animalArray[0][1]);



