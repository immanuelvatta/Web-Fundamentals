//for loop

//initialization
//condition
//final expression

// recipe
// i++ increment the var value by 1

// for(initialization; CSSConditionRule; final expression){

// }
//create a loop that goes from 1 to 10
//  start var
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }
//                  0           1         2        3  
// var animals = ['red panda','elephant', 'koala', 'bear'];

// for(var i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }

var animals = ['red panda','elephant', 'koala', 'bear'];
//only console.log 'koala' if you find it
for(var i = 0; i < animals.length; i++){
    if(animals[i]==='koala'){
        console.log("found", animals[i], 'at index', i);
    }else{
        console.log("no koala in sight");
    }    
}