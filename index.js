const express = require("express");
const cors = require("cors");
const estoqueRoutes = require("./routes/estoqueRoute")
const xmlConverterRoutes = require("./routes/xmlConverterRoute")
const {initializeMongo} = require("./mongo")

// XML Converter
const xml2js = require("xml2js");
const multer = require("multer");

const tableList = require("./constants/tableList");

const port = 5001

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true,}));
app.use(express.json());

// Routes
app.use("/estoque", estoqueRoutes);
app.use("/xml-converter", xmlConverterRoutes)

app.listen(port, () => {
  console.log("O  Server foi inicializado na Porta " + port)
  initializeMongo()
});
