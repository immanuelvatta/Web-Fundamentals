// console.log("hello, script is working");
// var h1 = document.querySelector("h1");
// var title = document.querySelector("#title");

// console.log(h1);
// console.log(title);


function changeToDarkMode(){
    console.log("Changing to Dark Mode");

    //we need to target the container (wrapper) element
    var wrapperElement = document.querySelector(".wrapper");

    //show me the classlist 
    console.log(wrapperElement.classList);

    //remove a class
    wrapperElement.classList.remove("light-mode");

    //add dark-mode class

    wrapperElement.classList.add("dark-mode");
}

function changeToLightMode(){
    console.log("Changing to Dark Mode");

    //we need to target the container (wrapper) element
    var wrapperElement = document.querySelector(".wrapper");

    //show me the classlist 
    console.log(wrapperElement.classList);

    //remove a class
    wrapperElement.classList.remove("dark-mode");

    //add dark-mode class

    wrapperElement.classList.add("light-mode");
}