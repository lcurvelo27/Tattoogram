require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const corsConfig = {
    origin: true,
    credentials: true
}

app.use( express.static( `${__dirname}/../build` ) );
app.use(cors(corsConfig))

app.listen(3007, () => console.log('server listening on port 3007'))