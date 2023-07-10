// console.log("hello");
//get the root element
var r = document.querySelector(':root');
console.log(r);

//get the styles (properties and values) for the root

var rs = getComputedStyle(r);
// console.log(rs);
// console.log( rs.getPropertyValue('--main-bg') ;


function toggleColor(){
    r.style.setProperty('--main-bg', 'blue');
    r.style.setProperty('--text-color', 'white');
    console.log(r.style);
}