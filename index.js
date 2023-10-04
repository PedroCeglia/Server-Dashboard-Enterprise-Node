const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const tableList = require('./tableList');

const port = 5000
const uri = "mongodb+srv://devcegliapedro:NH16WsNQbh4ahnpH@clusterpctx.ag1rmhm.mongodb.net/?retryWrites=true&w=majority";

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
    mongoose.connect(uri).then(()=>{console.log("Rodou!")}).catch((erro)=>{console.log(erro)});
})