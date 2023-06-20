function incrementLikes(likes){
    // finds the likes from the html page
    var totalLikes =(document.getElementById(likes).innerText);
    // console.log(totalLikes);
    //increment the total likes
    totalLikes++;
    //output the update total likes
    document.getElementById(likes).innerText = totalLikes;
}
