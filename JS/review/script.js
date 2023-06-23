// console.log("hello");

// function removeMe(element) {
//     console.log(element);

//     element.remove();
// }
function removeMe() {
    //1. target what to remove
    var removeButton = document.getElementById('removeThisButton');
    removeButton.remove();
    //or 
    //document.getElementById('removeThisButton').remove;
}

    //clicking on any up arrows will increase the total up votes on each post

//if you hardcode it make sure you do it like (voteDown(id))
var vote1= 29;
var vote2= 121;

function voteUp(id){
    console.log("vote", id);
    if(id===1){
        document.getElementById("vote1").innerHTML++;
    }else{
        document.getElementById("vote2").innerHTML++;
    }
}

function voteDown(id){
    console.log("vote", id);
    if(id == 1){
        vote1--;
        document.getElementById("vote1").innerHTML = vote1;
    }else{
        vote2--;
        document.getElementById("vote2").innerHTML = vote2;
    }
}


// when user clicks the go button show an alert message with the value in the text input

function alertMe(element){
    alert('Searching for ..."'+ document.getElementById('userInput').value +'"');
}

//-login logout

function changeButton(element){
    console.log(element);

    if(element.innerText === "Log in"){
        element.innerText = "logout";
    }else{
        element.innerText = "Log in";
    }
}