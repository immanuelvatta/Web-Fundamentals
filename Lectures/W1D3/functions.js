//create the function
function countToFive() {
    for (let num = 1; num <= 5; num++) {
        console.log(num)
        
    }
    
}

//call the function / invoke
countToFive();




function greet(){
    //console.log("hello");
    return("hello");
}
//greet();

//console.log(greet());
// A FUNCTION IS EQUAL TO ITS RETURN

//var message = great();

// create a function that takes in some ingredients and loops over the ingredients

var ingredients = ["🍞", "🥬", "🍅", "🥓", "🧀"];

function loopOverIngredients(items){
    console.log(items);
    for (var i = 0; i < items.length; i++) {
          console.log(items[i]);
        
    }

}

loopOverIngredients(ingredients);

var numbers = [33,44,55,-5,0,100];

function largestInArray(number) {
    
    var largest = 0;
    for (var i = 0 ; i <number.length; i++){
        //compare the largest num with the num from the array looking at
        if(number[i]> largest){
            largest = number[i];
        }
    }
    return largest;
}

var biggest = largestInArray(numbers);
console.log(biggest);