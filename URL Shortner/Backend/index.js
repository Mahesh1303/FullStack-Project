const express=require('express')
const { MongoConnection } = require('./connection')
const urlroutes=require('./Routes/Urlroutes')
const userroutes=require("./Routes/Useroutes")
const cors=require('cors')


const app=express()

const port =500

// Database 

var url="mongodb://127.0.0.1:27017/URL-Shortner-Url"


MongoConnection(url)
.then(()=>{

    return console.log("Mongodb Connected Successfully ")
})
.catch((err)=>{
    return console.log("Mongodb Error :" ,err)
})



// Middlewares

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())
// Routes

app.use('/url',urlroutes)


app.use('/user',userroutes)


app.listen(port,()=>{   

console.log(`Server started at port : ${port}`)

})

