const express = require('express')
const path = require('path')
const bodyparser = require("body-parser")
const session =require("express-session")
const {v4:uuidv4}=require("uuid")

const router = require('./router')
const app = express()

const port = process.env.PORT || 7000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,)))

app.use(session({
    secret:uuidv4(), //uuid
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router)

app.get('/',(req,res)=>{
    res.render('base',{title:"loginSystem"})
})

app.listen(port,()=>{console.log("hosting to the server on http://localhost:7000")});