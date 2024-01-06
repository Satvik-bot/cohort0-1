function wait(seconds) {
    return new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            resolve()
        }, 1000*n);
    })
}

wait();

// Export the function if needed (for example, if you are using CommonJS modules)
module.exports = wait;
