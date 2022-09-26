const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;

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
