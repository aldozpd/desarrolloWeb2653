const connection = require('./db-connection.js');
const express = require('express');
const app = express();

app.use(express.json());

app.get("/api", (req,res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
})

app.post("/db-connection", async (req,res) => {
    console.log(req.body);
    res.send(await connection.connection(req.body.query));
})

app.post("/login", async (req,res) => {
    console.log(req.body);
    let query = "select * from usuario u where u.num_cta like '"+req.body.user+"' and u.pass like '"+req.body.pass+"'";
    let result = await connection.connection(query); 
    res.send(result);
})

app.listen(5000,()=>{console.log("Server started on port 5000");});