const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require("dotenv").config();

console.log(
"user: " + process.env.USERNAME,
"host: " + process.env.HOST,
"password: " + process.env.SQLPASS,
"database: " + process.env.DATABASE
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const db = mysql.createConnection({
    user: process.env.USERNAME,
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

app.get('/factories', (req, res) => {
    db.query('SELECT * FROM factories', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});