require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const User = require('./models/User')
const Session = require('./models/Session')
const { authenticateSession } = require('./middleware/auth')

User.sync({ force: false })
Session.sync({ force: true })

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        // expires: new Date(Date.now() + 15 * 60 * 1000),
        resave: true, //
        saveUninitialized: true, //
        cookie: {
            // secure: true, // Only HTTPS
            // maxAge: 15 * 60 * 1000, // cookie expires in 15 min
            maxAge: 0.2 * 60 * 1000, // TESTING PURPOSES
            // domain: 'localhost', //
        },
    })
)

const PORT = process.env.PORT || 9000

app.use('/auth', require('./routes/auth'))

app.use(authenticateSession)
app.get('/app', (req, res) => {
    console.log('x')
})

app.get('*', (req, res) => {
    res.status(404).send('other routes do not exist')
})

app.listen(PORT, () => {
    console.log(`running server on ${PORT}`)
    // setTimeout(() => {
    //     testDBResponse()
    // }, 1000)
})