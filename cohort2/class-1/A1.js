// Create a counter in JS (counts down from 30 to 0)

// setinterval 
let num = 30;
let counter = setInterval(() => {
    console.log(num);
    if(num==0){
        console.log("end");
        clearInterval(counter);
    }
    num=num-1;
}, 1*1000) 