const nodemailer = require('nodemailer');

const transpoerter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
    },
});

module.exports = transpoerter;
