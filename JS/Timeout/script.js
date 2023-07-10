
function codeToRunLater() {
    for(var i = 0; i < 1000; i++){
        console.log("running: " + i);
    }
}
setTimeout(codeToRunLater, 5000);
console.log("End");