const mongoose = require('mongoose')

const estoqueShema = new mongoose.Schema({
    "nome":{ type: String , required: true },
    "ncm":{ type: String , required: true },
    "preco":{type : Number , required: true },
    "id": {type : Number , required:true , unique:true }
})

module.exports = mongoose.model('Produto' , estoqueShema)