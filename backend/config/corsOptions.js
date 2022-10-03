const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error(`Not allowed by CORS at ${origin}`));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
