var likes = 3;
var likeElement = document.querySelector("#likeCounter");

console.log(likeElement);
console.log(likes);

function incrementLikes(){
    likes++;
    likeElement.innerText = likes;
    console.log(likes);

}

// function incrementLikes(likes){
//     // finds the likes from the html page
//     var totalLikes = parseInt(document.getElementById(likes).innerText);
//     // console.log(totalLikes);
//     //increment the total likes
//     totalLikes++;
//     //output the update total likes
//     document.getElementById(likes).innerText = totalLikes;
// }