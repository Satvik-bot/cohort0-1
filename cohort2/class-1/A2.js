// calculate the time it takes between a setTimeout call and the inner function actually running
setInterval(()=> {
    function helper() {
        console.log("hello")
    }

    const start = process.hrtime.bigint();
    setTimeout(helper, 1*1000);
    const end = process.hrtime.bigint();

    console.log(`Execution time: ${end - start} ms`);
}, 3*1000)