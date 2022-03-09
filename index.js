const express = require('express') // a bare path
const mongoose = require('mongoose')
const morgan = require('morgan')

const connect = require("./utilities/connect")
const wilder = require("./models/Wilder")

 const wilderRouter = require('./ressources/wilder/wilder.controller')

const app = express()
// app.use((req, res, next)=>{
//     console.log('kikoo, je suis un middleware')
//     next()
// })

app.use(morgan('dev'))

app.use('/api/wilders', wilderRouter)

connect()



const PORT = 3000
app.listen(PORT, ()=>console.log(`Listenning on port ${PORT}`))