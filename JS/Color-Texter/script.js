//if you use querySelectorALl, it will give a list of matching elements back.
// if you want to work with each element individually, you need to use a loop

var pTags = document.querySelectorAll("p");
function getColor(element){
    console.log(element.value);
    console.log(pTags);
    for(var i =0; i <pTags.length; i++){
        pTags[i].style.color = element.value;
    }
    // pTags.style.color = element.value;
}