const express = require('express');
const app = express();
const conn = require('./db-connector');

//Express settings
app.set('views','../views')
app.set('view engine','ejs')

app.get('/', (req,res) => {

    res.redirect('/index');

});

app.get('/login', (req,res) => {
    res.render('login');
});

app.get('/index', (req,res) => {
    const data = conn.dbConnection();
    res.render('index', {user:data.num_cta});
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});

