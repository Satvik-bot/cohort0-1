// Create a terminal clock (HH:MM:SS)

setInterval (()=>{
    var currentHour = new Date().getHours()
    var currentMinutes = new Date().getMinutes()
    var currentSeconds = new Date().getSeconds()
    console.log(`Current Time is: ${currentHour}:${currentMinutes}:${currentSeconds}`);
}, 1*1000)
