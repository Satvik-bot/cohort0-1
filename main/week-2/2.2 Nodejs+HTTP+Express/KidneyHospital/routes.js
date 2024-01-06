const path = require('path')
const express = require("express")

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
})