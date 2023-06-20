console.log("hello");

//target the h1
var h1Element = document.querySelector("h1");
console.log(h1Element);

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


function setColor(){
    console.log("clicked");
    //target the input and get the user value

    var userFavColor = document.querySelector(".colorInput").value;
    console.log(userFavColor);

    //grab the element to display 
    var pTag = document.querySelector(".card p");
    
    pTag.innerText ="My favorite color is: " + userFavColor;


    //change background color based on user input
    var theBody = document.querySelector("body");
    
    theBody.style.backgroundColor = userFavColor;

}

// click the h1 and alert

function chooseLunch(element){
    alert("You picked " + element.value);
}

//callback function
function message(){
    console.log("Delayed Message");
}
console.log("Start");

//special function that will execute after a set amount of time
setTimeout(message, 3000);
console.log("End");