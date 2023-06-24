var currentUsername = "";
var cardsDiv = document.querySelector("#cards");

function getUsername(element){
    console.log(element.value);
    currentUsername = element.value;
}

async function search(){
    var response = await fetch("https://api.github.com/users/"+ currentUsername);
    var coderData = await response.json();
    console.log(coderData)
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;

}

function makeCoderCard(data){
    // var response = "<div class=\"card\">";
    // return response + "</div>"
    var response = `<div class="card">
                        <img src="${data.avatar_url}" alt="${data.login}">
                        <div class="flex-1">
                        <h3>${data.login} - ${data.name} </h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                        </div>
                    </div>`;
    return response;
}