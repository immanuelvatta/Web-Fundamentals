var count = 1;
var countElement = document.querySelector("#count");
console.log(countElement);

function add1(){
    count++;
    console.log(count)
    countElement.innerText = ("The Count is "+ count)
}
function subtract1(){
    count--;
    countElement.innerText = ("The Count is "+ count)
    console.log(count)
}