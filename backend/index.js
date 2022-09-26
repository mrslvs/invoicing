const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 9000;

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};
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
