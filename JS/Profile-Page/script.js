console.log("page loaded...");
//variable to get user's name
var userName = document.querySelector('#userName');
//variable to get request count
var requestCount = document.querySelector('#request');
//variable to get connection count
var connectionCount = document.querySelector('#connection');

//clicking edit profile button will change user's name from 'Jane Doe' to 'Immanuel Vattakunnel'
function editProfile(){
    userName.innerText = "Immanuel Vattakunnel";
}
//pressing accept button will increase the "your connections" number and decrease the "connection request" number
function acceptInc(elementId){
    var element = document.querySelector(elementId);
    element.remove();
    requestCount.innerText--;
    connectionCount.innerText++;
}
//pressing reject button will decrease the "connection request" number
function rejectInc(elementId){
    var element = document.querySelector(elementId);
    element.remove();
    requestCount.innerText--;
}