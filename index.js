const express = require('express')
const app = express()
const port = process.env.PORT || 6060



app.get('/', (req, res)=>{
    res.send('Coffee House Server')
})


app.listen(port ,() =>{
    console.log(`Coffee House Server Running: ${port}`);
})