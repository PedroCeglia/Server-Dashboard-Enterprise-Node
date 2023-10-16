const mongoose = require("mongoose") 
const express = require('express')
const cors = require('cors')
const tableList = require('./tableList');

const port = 5001
const uri = "mongodb+srv://pctxdev:felinharcp2005@cluster0.xcxso7v.mongodb.net/?retryWrites=true&w=majority";

//require("dotenv").config()

const app = express()

app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.get('/estoque', (req, res) => {
  console.log("oioioi")
    res.json(tableList)
  })

  
app.listen(port, () => {
    console.log("Start Server: Rodando na Porta " + port)
    mongoose.connect(uri).then(()=>{console.log("MongoDB CONECTADO!")}).catch((erro)=>{console.log(erro)});
})


