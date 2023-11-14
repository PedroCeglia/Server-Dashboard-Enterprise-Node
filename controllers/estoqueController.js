const tableList = require("../constants/tableList");

function getEstoque(req, res){
    res.json(tableList)
}

module.exports = { getEstoque }