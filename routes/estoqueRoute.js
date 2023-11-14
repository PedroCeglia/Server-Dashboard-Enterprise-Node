const express = require("express")
const router = express.Router()
const { getEstoque } = require("../controllers/estoqueController")

router.get("/", getEstoque)

module.exports = router