const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const massive = require('massive')

app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log('db set up')
        app.set('db', db)
    }
).catch(error => console.log(error))

app.get('/api/users', (req, res) => {
    app.get('db').getUsers().then(response =>{
        return res.status(200).send(response)
    })
})

app.get('/api/user', (req, res) => {
    app.get('db').getUserProfile(id).then(response => {
        return res.status(200).send(response)
    })
})



app.listen(3005, () => console.log('listening on port 3005'))