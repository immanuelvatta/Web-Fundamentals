//conditionals like they are checkpoints in a video game.

//if statement

// var key = false; 
// if (key == true) {
//     console.log("you may pass!");
// }else{
//     console.log("you shall not pass!!");
// }

// var weapon = "bow"; 
// if (weapon == "sword") {
//     console.log("you may pass!");
// }else if(weapon=="shield"){
//     console.log("you shall not pass.... with care!!");
// }else if(weapon=="bow"){
//     console.log("you shall not pass.... with fast!!");
// }else {
//     console.log("you shall not pass");
// }

var a = 10;
var result = "";
if(a>0){
    result = 'positive';
}else if(a>5) {
    result = 'very positive';
}else{
    result = 'not positive';
}

if (a>5) {
    result = "cool";
    
}

console.log(result);


//--------------------------------
//              0       1      2
var people = ['carter','alice','ben']; //3

//AND &&
// OR ||

//if(people.length <=3 && people[0]=='bob'){
//if(people.length <=3 || people[0]=='bob'){
if(people.length <=3 || people[0]!='bob'){  
    people.push("Albert");
}
if (people[people.length -1] != "albert"){
    console.log("bob needs to get on the bus");
}

console.log(people);


for (var num = 0; num <= 5; num++) {
    console.log(num);
}



num = num+1;