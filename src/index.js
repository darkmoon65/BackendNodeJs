

const express = require('express')
const json = require('express').json
const connectDBMongo = require('./db/conectionMongo')
const cors = require('cors')
const eventRouter = require('./routes/event')
const waitRouter = require('./routes/wait')

const server = express()
server.use(json())
server.use(cors())
connectDBMongo();

// rutas
server.use('/event', eventRouter)
server.use('/wait', waitRouter)

server.listen( 3000 , () => {
    console.log("server running")
})