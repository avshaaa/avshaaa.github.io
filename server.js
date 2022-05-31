const fs = require('fs')
const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) =>{
    res.render('index.ejs')
  })

app.get('/login', (req, res) =>{
    res.render('login.ejs')
  })

app.listen(process.env.PORT, ()=>{
    console.log('server is up and running on port', process.env.PORT)
})