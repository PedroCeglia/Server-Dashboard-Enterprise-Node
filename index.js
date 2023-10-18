const connectDatabase = require('./database/connection')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const tableList = require('./tableList');
const produtoController = require('./services/produtoController')


const port = 5001
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  }),
)


app.get('/', (req, res) => {
  produtoController.listarEstoque(req, res)
})

app.post('/', (req, res) => {
  const prod = req.body;
  produtoController.adicionarDados(prod);
  res.json({ message: 'Informação adicionada com sucesso' })
})

app.listen(port, () => {
  console.log("Start Server: Rodando na Porta " + port)
  connectDatabase()
  })


