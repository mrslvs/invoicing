require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const db = require('./config/database');

// User.sync()
//     .then((data) => {
//         console.log('successfully synced user table');
//     })
//     .catch((err) => {
//         console.log('error while ');
//     });

// db.authenticate()
//     .then(() => {
//         console.log('Connection to the MySQL database established.');
//     })
//     .catch((err) => {
//         console.log('Error occured trying to connect to the MySQL database!');
//         console.log(err.message);
//     });

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors(corsOptions));

app.get('^/$|/index(.html)?', (req, res) => {
    // ^/ -> must start with /
    // /$ -> must end with /
    // | -> or
    // (.html)? doesn't have to be included
    res.sendFile(__dirname + '/views/index.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/404.html');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
