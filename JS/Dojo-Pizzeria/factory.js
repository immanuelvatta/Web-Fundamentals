/*
And if we're going to just make one pizza we can define it all at once like the sandwich we see below.
*/
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

/*
But what if we wanted to make multiple sandwiches? We could define a function that allows us to craft a sandwich!
*/
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

/*
Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, 
but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
*/

//Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crust,sauce,cheeses,toppings){
    var pizza ={};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var pizzaRequest1 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"],["Pepperoni","Sausage"]);

console.log(pizzaRequest1);
//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var pizzaRequest2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"],["Mushrooms", "Olives", "Onions"]);

console.log(pizzaRequest2);

// Create 2 more pizzas with any toppings we like!

var customRequest = pizzaOven("Thin Crust", "Spicy Red Sauce", ["Parmesan ", "Gouda"],["Tomato", "Chicken", "Ham"]);

console.log(customRequest);

var customRequest1 = pizzaOven("Thick Crust", "BBQ Sauce", ["Provolone", "Mozzarella"],["Green Pepper", "Beef", "Bacon","Pepperoni"]);

console.log(customRequest1);

/*
Create a function called randomPizza that uses Math.random() to create a random pizza!
*/
var crustTypes = ["Thin Crust","Thick Crust","Deep Dish", "Hand Tossed","Neapolitan"];
var sauceTypes = ["Traditional","Marinara","Spicy Red Sauce","BBQ Sauce", "Pesto"];
var cheeses = ["Parmesan ", "Gouda", "Mozzarella","Provolone","Ricotta"];
var toppings = ["Pepperoni","Mushroom","Sausage","Beef","Bacon","Pineapple"];

//function to have multiple values that could be selected
// function randomRange(max, min) {
//     return Math.floor(Math.random() * max - min) + min;
// }

//function for random elements selected
// function randomPick(arr) {
//     var i = Math.floor(arr.length * Math.random());
//     return arr[i];
// }

function randomPizza(){
    // this.crust = pizza.crust[Math.floor(Math.random()*(crust.length))];
    // console.log(this.crust = pizza.crust[Math.floor(Math.random()* (Object.entries(pizza).length))]);
    // console.log(this.sauce = pizza.sauce[Math.floor(Math.random()* (Object.entries(pizza).length))]);
    // console.log(this.cheeses = pizza.cheeses[Math.floor(Math.random()* (Object.entries(pizza).length))]);
    // console.log(this.toppings = pizza.toppings[Math.floor(Math.random()* (Object.entries(pizza).length))]);

    var pizza = {};
    pizza.crust = crustTypes[Math.floor(Math.random()*crustTypes.length)];
    pizza.sauce = sauceTypes[Math.floor(Math.random()*sauceTypes.length)];

    // pizza.cheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    // pizza.topping = toppings[Math.floor(Math.random()*toppings.length)];

    pizza.cheese = [];
    pizza.topping = [];


    // for multiple cheeses
    // for(var i=0; i<randomRange(5, 1); i++) {
    //     pizza.cheeses.push(randomPick(cheeses));
    // }
    // for multiple toppings
    // for(var i=0; i<randomRange(4, 0); i++) {
    //     pizza.toppings.push(randomPick(toppings));
    // }
    //for 3 cheese
    for(var i=0; i<2; i++){
        pizza.cheese.push(cheeses[Math.floor(Math.random()*cheeses.length)]);
    }
    for (var i=0; i<3; i++){
        pizza.topping.push(toppings[Math.floor(Math.random()*toppings.length)]);
    }
    
    return pizza;
}

console.log(randomPizza());