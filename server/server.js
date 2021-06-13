const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.SQLPASS,
    database: process.env.DATABASE
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const qty = req.body.qty;
    const max = req.body.max;
    const min = req.body.min;

    db.query(
        'INSERT INTO factories (name, qty, max, min) VALUES (?,?,?,?)', 
        [name, qty, max, min], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );    
});

app.listen(3000, () => {
    console.log("server is running 3001");
});