const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// XML Converter
const xml2js = require("xml2js");
const multer = require("multer");

const tableList = require("./tableList");

const port = 5000
const uri = "mongodb+srv://pctxdev:felinharcp2005@cluster0.xcxso7v.mongodb.net/?retryWrites=true&w=majority";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/estoque", (req, res) => { res.json(tableList); });

app.post("/xml-converter", upload.single("xmlFile"), (req, res) => {
  const xmlFile = req.file;

  // Verifica se um arquivo XML foi enviado
  if (!xmlFile) {
    return res.status(400).json({ error: "Nenhum arquivo XML foi enviado." });
  }

  // Converte o XML para JSON usando xml2js
  const xmlParser = new xml2js.Parser({ explicitArray: false });
  xmlParser.parseString(xmlFile.buffer.toString(), (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao converter XML para JSON." });
    }

    res.json(result);
  });
});

app.listen(port, () => {
  console.log("Start Server: Rodando na Porta " + port);
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB CONECTADO!");
    })
    .catch((erro) => {
      console.log(erro);
    });
});
