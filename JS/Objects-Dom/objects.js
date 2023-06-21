
// ------primitive datatypes----
// Boolean true false
// Strings "hello"
// Numbers 123 11.5 
// Undefined / null

//----complex datatypes-----
// Arrays [1,2,3,4]
// Objects {}

var animals = ['zebra','lion','tiger']

var personArray = ['Immanuel', 'Vattakunnel', 33, '🍕']

// object

var personJohnObj = {}
console.log(personJohnObj);

// create some attributes for this obj
personJohnObj.name = "John";
console.log(personJohnObj);

personJohnObj.age = 33;
console.log(personJohnObj);

// creating the whole obj

var car = {
    "wheels": 4,
    "doors" : 2,
    "engine" : "v8",
    "isSportsCar" : false
}

console.log(car.doors);

var taco1 = {
    "tortilla": "soft corn tortilla",
    name : "bob",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}

console.log(taco1.tacoInfo());
    
// we can now still get all the delicious taco facts by
// taco1.tacoInfo(); // note tacoInfo still gets called like a function


taco1.name;
taco1["name"];
console.log(taco1.name);
console.log(taco1["name"]);