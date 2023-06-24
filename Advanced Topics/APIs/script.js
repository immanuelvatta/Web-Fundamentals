async function getCoderData(){
    var response = await fetch("https://api.github.com/users/immanuelvatta");
    console.log(response);
    var coderData = await response.json();
    console.log(coderData);
}

getCoderData();

// async await way
async function asyncGetHeroData(){

    //grab the input
    var heroId = document.getElementById("heroNum").value;
    var heroImage = document.getElementById("heroImage");
    var heroName = document.getElementById("heroName");
    // var response = await fetch("https://akabab.github.io/superhero-api/api/id/" + heroId+ ".json");
    var response = await fetch(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`);
    //error handling
    if(!response.ok){
        console.log("Houston we have a problem");
        heroImage.src ="https://placekitten.com/408/287"
    }
    var heroData = await response.json();
    console.log(heroData.name)
    console.log(heroData.images.md);
    //go to the DOM to access the image and place its source

    heroImage.src = heroData.images.md
    heroName.innerText = heroData.name

}
// asyncGetHeroData();

//then -catch
function promiseHeroData() {

        
    fetch("https://akabab.github.io/superhero-api/api/id/473.json")
    //promise resolution (if its successful it'll trigger then... if its unsuccessful then it'll trigger catch)
    .then(function(serverResponse){
        console.log(serverResponse);
        return serverResponse.json()
    })
    .then(function (jsonData){
        console.log(jsonData)
    })
    .catch(function(errResponse){
        console.log(errResponse);
        heroImage.src ="https://placekitten.com/408/287"
    })
    
    

}
// promiseHeroData();


async function asyncGetPokemon(){

    //grab the input
    var pokeName = document.getElementById("pokeName").value;
    console.log("pokeName", pokeName);
    var lower = pokeName.toLowerCase();
    console.log(lower);
    var pokeImage = document.getElementById("pokeImage");
    // var heroName = document.getElementById("heroName");
    // var response = await fetch("https://akabab.github.io/superhero-api/api/id/" + heroId+ ".json");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+lower);
    //error handling
    if(!response.ok){
        console.log("Houston we have a problem");
        pokeImage.src ="https://placekitten.com/408/287"
    }
    var pokeData = await response.json();
    console.log(pokeData.name)
    console.log(pokeData.sprites.front_default);
    //go to the DOM to access the image and place its source

    pokeImage.src = pokeData.sprites.front_default;
    pokeName.innerText = pokeData.name;

}
asyncGetPokemon();