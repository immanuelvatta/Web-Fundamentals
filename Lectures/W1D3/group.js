/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2023
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

 */


for (let year = 1996; year <= 2023; year++) {
    // if(year == 2006 || year == 2016){
    if(year%10 ==6 && year != 1996){
        console.log("happy decade of JS!")
    }else if(year == 2023){
        console.log("HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈")
    }else{
        console.log(year, "JS is awesome");
    }
    
}