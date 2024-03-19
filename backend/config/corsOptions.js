const allowedOrigins = [process.env.FRONTEND_IP, process.env.FRONTEND_URL]
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            console.log(`Request allowed - ${origin}`)
            callback(null, true)
        } else {
            callback(new Error(`Not allowed by CORS at ${origin}`))
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, //server is willing to accept credentials (e.g., cookies, authorization headers)
}

module.exports = corsOptions
