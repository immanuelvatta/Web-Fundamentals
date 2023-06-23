var animalImg = document.querySelector("#animal");

// console.log(animalImg);
function pickCat(element){
    // console.log(element);
    // element.style.backgroundColor = "goldenrod";
    
    //take an element out if we select it
    // element.remove();
    animalImg.src= "assets/cat.jpg";
    animalImg.alt= "pic of a cat";
    
    
    // element.style.backgroundColor= "#222222";
    // element.style.color = "#ffffff";
    // element.classList.add("dark-mode");
    if(element.classList.contains("dark-mode")){
        element.innerText= "Good cat: switch to evil cat button";
        element.classList.remove("dark-mode");
    }else{
        element.innerText= "Evil cat: switch to good cat button";
        element.classList.add("dark-mode");
        animalImg.src= "assets/evilcat.jpg"
    }
    // console.log(animalImg.src);
}

function pickDog(element){
    // element.style.backgroundColor = "goldenrod"
    // console.log(element.style);
    console.log(element.classList)
    element.classList.add("btn");
    animalImg.src= "assets/dog.jpg";
    animalImg.alt= "pic of a dog";
    // console.log(animalImg.src)
}