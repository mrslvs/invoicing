const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error(`Not allowed by CORS at ${origin}`));
        }
    },
    credentials: true, // (CORS blocking login)
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
