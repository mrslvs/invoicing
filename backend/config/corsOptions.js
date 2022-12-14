const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('corsOptions blocking origin');
            callback(new Error(`Not allowed by CORS at ${origin}`));
        }
    },
    credentials: true, // (CORS blocking login)
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
