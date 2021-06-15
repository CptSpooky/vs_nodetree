const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require("dotenv").config();

console.log("PORT: " + PORT);

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

// Express serve up index.html file
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

let db = null;
/* Database connection*/
if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        user: process.env.USER,
        host: process.env.HOST,
        password: process.env.PASS,
        database: process.env.DATABASE
    });
}

/* Create a factory */
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
                /* Grab the Id of inserted operation*/
                res.send("" + result.insertId);
            }
        }
    );    
});

/* Get all factories */
app.get('/', (req, res) => {
    db.query('SELECT * FROM factories', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

/* Get all factories */
app.get('/api/factories', (req, res) => {
    db.query('SELECT * FROM factories', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

/* Get one factory */
app.get('/factories/:id', (req, res) => {
    db.query('SELECT * FROM factories WHERE id = ?',[req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

/* Delete factory */
app.delete('/factories/:id', (req, res) => {
    console.log("server delete")
    console.log("ID: " + req.params.id);
    console.log("Params: " + JSON.stringify(req.params));
    db.query('DELETE FROM factories WHERE id = ?',[req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Deleted successfully');
        }
    });
});

/* Update a factory */
app.put('/factories/:id', (req, res) => {
    const name = req.body.name;
    const qty = req.body.qty;
    const max = req.body.max;
    const min = req.body.min;
    const id = req.params.id;

    db.query(
        'UPDATE factories SET name = ?, qty = ?, max = ?, min = ? WHERE id = ?', 
        [name, qty, max, min, id], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values updated");
            }
        }
    );    
});

db.connect();

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});