const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 5000
const mDB = require('./db')
mDB();
app.get('/',(req,res) =>{
    res.send('Hello World!')
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/displayData"))
app.listen(port,()=>{
    console.log(`Example App listening on port ${port}`);
})

