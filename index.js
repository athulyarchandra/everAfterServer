require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./database/dbConnection')
const everAfterServer = express()
const router = require('./routes/router')

everAfterServer.use(cors())
everAfterServer.use(express.json())
everAfterServer.use(router)
everAfterServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

everAfterServer.listen(PORT,()=>{
    console.log(`everAfterServer statred at port ${PORT} and client request!!`);   
})

everAfterServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style = "color:blue">everAfterServer stated at port and waiting for client request</h1>`)
})
 