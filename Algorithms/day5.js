// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.random(); 
    var min = 1;
    var max = 6;
    // The maximum is inclusive and the minimum is inclusive
    roll = Math.floor(roll * (max - min+1) + min)
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function returnLifeAnswers(arr) {
    //create a variable to get random index of the array
    var randomIndex = Math.floor(Math.random()*arr.length);
    var randomAnswer = arr[randomIndex];
    return randomAnswer;
}

console.log(returnLifeAnswers(lifesAnswers));