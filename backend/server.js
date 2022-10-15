require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const authRoute = require('./routes/auth');
const User = require('./models/User');
const Invoice = require('./models/Invoice');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

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

User.sync();
Invoice.sync();

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cookieParser());

app.use('/confirmation', cors(), require('./routes/confirmation'));

app.use(cors(corsOptions));
app.use('/auth', require('./routes/auth'));

app.get('/app', verifyJWT, (req, res) => {
    res.send('hello there, server aknowledges that you are logged in on frontend');
});

app.use('/invoice', require('./routes/invoice'));

app.get('^/$|/index(.html)?', cors({ origin: '*' }), (req, res) => {
    // ^/ -> must start with /
    // /$ -> must end with /
    // | -> or
    // (.html)? doesn't have to be included
    res.sendFile(__dirname + '/views/index.html');
});

app.get('*', cors({ origin: '*' }), (req, res) => {
    res.sendFile(__dirname + '/views/404.html');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
