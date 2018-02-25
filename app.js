const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'shinedead2',
    database : 'usbasepaystructure',
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected....');
});

const app = express();

app.listen('3000',()=>{
    console.log('Server started on port 3000');
});

app.get('/getposts',(req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});