const express = require("express");

const app = express();

function printHey(n) {
    if(n==1) {
        ans = "SIU"
    }
    else {
        ans = "stfu!"
    }
    return ans;
}
 
app.get('/', (req, res) => {
    const n = req.query.n;
    let ans = printHey(n);

    res.send("Hi  " + ans);
}) 

app.listen(3000);