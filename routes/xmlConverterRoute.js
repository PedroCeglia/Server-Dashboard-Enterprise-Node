const express = require("express")
const router = express.Router()
const { xmlConverter } = require("../controllers/xmlConverterController")
const multer = require("multer")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("xmlFile"), xmlConverter)

module.exports = router
