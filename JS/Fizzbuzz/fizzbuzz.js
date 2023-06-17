function fizzBuzz() {
    
    // Write code that will go through each number from 1 to 100
    for(var i = 1; i<=100; i++){
        // For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
        if(i % 15 == 0){
            console.log("FizzBuzz");
        // For each number that is a multiple of 3, print "Fizz"
        }else if(i % 3 ==0){
            console.log("Fizz");
        // For each number that is a multiple of 5, print "Buzz"
        }else if(i % 5 ==0){
            console.log("Buzz");
        // All other numbers should just print normally
        }else{
            console.log(i);
        }
    }
}

fizzBuzz();