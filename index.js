const connectDatabase = require('./database/connection')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const tableList = require('./tableList');
const produtoController = require('./services/produtoController')
const xmlConverter = require('./services/xmlConverter');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
  const listEstoque = produtoController.listarEstoque()
  res.json(listEstoque)
})

app.post('/', (req, res) => {
  const prod = req.body;
  console.log(prod)
  produtoController.adicionarDados(prod);
  res.json({ message: 'Informação adicionada com sucesso' })
})

app.post("/xml-converter", upload.single("xmlFile"), (req, res) => {

  const xmlBufferString = req.file.buffer.toString()

  const hasError = xmlConverter.verifyXmlGo(xmlBufferString)
  if (hasError) {
    res.json({ error: "O Arquivo não foi encontrado!" })
  }

  xmlConverter.xmlConverterToJson(xmlBufferString, res)
})

app.listen(port, () => {
  console.log("Start Server: Rodando na Porta " + port)
  connectDatabase()
})


